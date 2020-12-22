import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Success from '../pages/Success';
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
  ProfileSaved: undefined;
  CarRented: undefined;
  Exit: undefined;
};

const App = createStackNavigator<AppParamList>();

const ProfileSaved = () => (
  <Success
    title="Feito!"
    subtitle="Agora suas infomações
      estão atualizadas."
    nextPage="Home"
  />
);

const CarRented = () => (
  <Success
    title="Carro alugado!"
    subtitle="Agora você só precisa ir
    até a concessionária da RENTX
    pegar o seu automóvel."
    nextPage="Appointments"
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
    <App.Screen name="ProfileSaved" component={ProfileSaved} />
    <App.Screen name="CarRented" component={CarRented} />
    <App.Screen name="Exit" component={Exit} />
  </App.Navigator>
);

export default AppRoutes;
