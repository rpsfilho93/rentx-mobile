import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  image_url: string | null;
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
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    /* const token = localStorage.getItem('@Proffy:token');
    const user = localStorage.getItem('@Proffy:user');

    if (token && user) {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }
    */
    const user: User = {
      id: '4b69add1-2fb1-4101-a81d-d0facdbdb4c6',
      name: 'Ricardo Filho',
      email: 'rpsfilho93@gmail.com',
      image_url: null,
    };

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDc5NTYxNjMsImV4cCI6MTYwODA0MjU2Mywic3ViIjoiNGI2OWFkZDEtMmZiMS00MTAxLWE4MWQtZDBmYWNkYmRiNGM2In0.cLt7YJr8YuwOgR83tLXRdu0M1UEn8q64edcbinv_Q0c';

    api.defaults.headers.Authorization = `Bearer ${token}`;
    return {} as AuthState;
  });

  /* useEffect(() => {
    async function sign() {
      const response = await api.post('/sessions', {
        email: 'rpsfilho93@gmail.com',
        password: '123123',
      });

      const { user, token } = response.data;

      console.log(user, token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setData({ user, token });
    }

    sign();
  }, []);
  */

  const signIn = useCallback(async ({ email, password, remember = false }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    console.log(token, user);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    if (remember) {
      localStorage.setItem('@Proffy:token', token);
      localStorage.setItem('@Proffy:user', JSON.stringify(user));
    }

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Proffy:token');
    localStorage.removeItem('@Proffy:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      setData({ token: data.token, user });

      localStorage.setItem('@Proffy:user', JSON.stringify(user));
    },
    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
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
