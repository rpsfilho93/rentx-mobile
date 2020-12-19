import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Success from '../pages/SuccessPage';
import DatePicker from '../pages/DatePicker';
import EditProfile from '../pages/EditProfile';
import Details from '../pages/Details';
import Exit from '../pages/Exit';
import AppTabs from './AppTabs';
import CarDTO from '../DTOS/Car';

export type AppParamList = {
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
  Exit: undefined;
};

const App = createStackNavigator<AppParamList>();

const SavedProfile = () => (
  <Success
    title="Feito!"
    subtitle="Agora suas informações estão atualizadas."
  />
);

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <App.Screen name="DatePicker" component={DatePicker} />

    <App.Screen name="AppTabs" component={AppTabs} />
    <App.Screen name="EditProfile" component={EditProfile} />
    <App.Screen name="Details" component={Details} />
    <App.Screen name="SavedProfile" component={SavedProfile} />
    <App.Screen name="Exit" component={Exit} />
  </App.Navigator>
);

export default AppRoutes;
