import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../pages/SplashScreen';

import Onboarding1 from '../pages/Onboarding1';
import Onboarding2 from '../pages/Onboarding2';
import Onboarding3 from '../pages/Onboarding3';
import Login from '../pages/Login';
import SignUp1 from '../pages/SignUp1';
import SignUp2 from '../pages/SignUp2';
import Success from '../pages/SuccessPage';

const Auth = createStackNavigator();

const AccountSaved = () => (<Success title='Feito!' subtitle='Agora suas infomações estão atualizadas.' />);

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

    <Auth.Screen name="SignUp1" component={SignUp1} />
    <Auth.Screen name="SignUp2" component={SignUp2} />

    <Auth.Screen
      name="AccountSaved"
      component={AccountSaved}
    />

  </Auth.Navigator>
);

export default AuthRoutes;

