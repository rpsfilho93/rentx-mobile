import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../pages/SplashScreen';

import Onboarding1 from '../pages/Onboarding1';
import Onboarding2 from '../pages/Onboarding2';
import Onboarding3 from '../pages/Onboarding3';
import Login from '../pages/Login';

const Auth = createStackNavigator();

const AuthRoutes:React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <Auth.Screen name="Login" component={Login} />

    <Auth.Screen name="SplashScreen" component={SplashScreen} />

    <Auth.Screen name="Onboarding1" component={Onboarding1} />
    <Auth.Screen name="Onboarding2" component={Onboarding2} />
    <Auth.Screen name="Onboarding3" component={Onboarding3} />

  </Auth.Navigator>
);

export default AuthRoutes;

