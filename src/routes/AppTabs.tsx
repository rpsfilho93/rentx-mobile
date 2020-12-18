import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Home from '../pages/Home';
import List from '../pages/List';
import Appointments from '../pages/Appointments';
import Profile from '../pages/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 26,
          height: 22,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveTintColor: '#A0A0B3',
        activeTintColor: '#DC1637',
        showLabel: false,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="home"
                size={size}
                color={focused ? '#DC1637' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-car' : 'md-car-outline'}
                size={30}
                color={focused ? '#DC1637' : color}
              />
            );
          },
        }}
      />

      <Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="calendar"
                size={size}
                color={focused ? '#DC1637' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="user"
                size={size}
                color={focused ? '#DC1637' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};

export default Tabs;
