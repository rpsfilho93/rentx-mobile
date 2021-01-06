import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../pages/SplashScreen';
import Login from '../pages/Login';
import Onboarding1 from '../pages/Onboarding1';
import Onboarding2 from '../pages/Onboarding2';
import Onboarding3 from '../pages/Onboarding3';
import SignUp1 from '../pages/SignUp1';
import SignUp2 from '../pages/SignUp2';
import Success from '../pages/Success';

export type AuthParamList = {
  Onboarding3: undefined;
  Login: undefined;
  SplashScreen: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  SignUp1: undefined;
  SignUp2: {
    name: string;
    email: string;
  };
  AccountSaved: undefined;
};

const AuthRoutes: React.FC = () => {
  const Auth = createStackNavigator();

  const SavedAccount = () => (
    <Success
      title="Conta criada!"
      subtitle="Agora é só fazer login e aproveitar."
      nextPage="Login"
    />
  );

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <Auth.Screen name="SplashScreen" component={SplashScreen} />
      <Auth.Screen name="Onboarding1" component={Onboarding1} />
      <Auth.Screen name="Onboarding2" component={Onboarding2} />
      <Auth.Screen name="Onboarding3" component={Onboarding3} />
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="SignUp1" component={SignUp1} />
      <Auth.Screen name="SignUp2" component={SignUp2} />
      <Auth.Screen name="SavedAccount" component={SavedAccount} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
