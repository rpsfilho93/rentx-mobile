import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding1 from '../pages/Onboarding1';

const Auth = createStackNavigator();

const AuthRoutes:React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <Auth.Screen name="Onboarding1" component={Onboarding1} />
  </Auth.Navigator>
);

export default AuthRoutes;

