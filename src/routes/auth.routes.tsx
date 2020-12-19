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
import DatePicker from '../pages/DatePicker';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Home from '../pages/Home';
import List from '../pages/List';
import Appointments from '../pages/Appointments';
import Details from '../pages/Details';
import AppTabs from './AppTabs';
import CarDTO from '../DTOS/Car';

export type AuthParamList = {
  DatePicker: undefined;
  AppTabs: undefined;
  EditProfile: undefined;
  Login: undefined;
  SplashScreen: undefined;
  Details: { car: CarDTO };
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  SignUp1: undefined;
  SignUp2: undefined;
  AccountSaved: undefined;
  SavedProfile: undefined;
};

const Auth = createStackNavigator<AuthParamList>();

const SavedAccount = () => (
  <Success
    title="Conta criada!"
    subtitle="Agora é só fazer login e aproveitar."
  />
);
const SavedProfile = () => (
  <Success
    title="Feito!"
    subtitle="Agora suas informações estão atualizadas."
  />
);

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <Auth.Screen name="Login" component={Login} />

    <Auth.Screen name="DatePicker" component={DatePicker} />

    <Auth.Screen name="AppTabs" component={AppTabs} />

    <Auth.Screen name="EditProfile" component={EditProfile} />

    <Auth.Screen name="SplashScreen" component={SplashScreen} />

    <Auth.Screen name="Details" component={Details} />

    <Auth.Screen name="Onboarding1" component={Onboarding1} />
    <Auth.Screen name="Onboarding2" component={Onboarding2} />
    <Auth.Screen name="Onboarding3" component={Onboarding3} />

    <Auth.Screen name="SignUp1" component={SignUp1} />
    <Auth.Screen name="SignUp2" component={SignUp2} />

    <Auth.Screen name="AccountSaved" component={SavedAccount} />

    <Auth.Screen name="SavedProfile" component={SavedProfile} />
  </Auth.Navigator>
);

export default AuthRoutes;
