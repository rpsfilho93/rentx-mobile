import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  image_url?: string | null;
  rentals: number;
  favoriteCar?: {
    name: string;
    brand: string;
    daily_value: number;
    fuel: string;
    image_url: string;
    occurrences: number;
  };
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInData {
  email: string;
  password: string;
  remember?: boolean;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInData): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      setLoading(true);

      const [token, user] = await AsyncStorage.multiGet([
        '@RentX:token',
        '@RentX:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password, remember = false }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    if (remember) {
      await AsyncStorage.multiSet([
        ['@RentX:token', token],
        ['@RentX:user', JSON.stringify(user)],
      ]);
    }

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@RentX:token', '@RentX:user']);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      setData({ token: data.token, user });
      await AsyncStorage.setItem('@RentX:user', JSON.stringify(user));
    },
    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
