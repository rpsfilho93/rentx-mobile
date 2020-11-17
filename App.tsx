import React from 'react';
import { StatusBar, View } from 'react-native';
import { AppLoading } from 'expo';
import {NavigationContainer} from '@react-navigation/native';
import {
  Archivo_400Regular,
  Archivo_600SemiBold,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Inter_400Regular,
} from '@expo-google-fonts/inter';

import Routes from './src/routes';

const App:React.FC = () => {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Inter_400Regular,
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Routes />
        </View>
      </NavigationContainer>
    );
  }
};

export default App;
