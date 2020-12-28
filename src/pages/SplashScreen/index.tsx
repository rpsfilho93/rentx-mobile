import React, { useCallback, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Animated, StatusBar } from 'react-native';

import logo from '../../assets/Union.png';
import name from '../../assets/Logotipo.png';

import { Container, Logo, Name } from './styles';

const SplashScreen: React.FC = () => {
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;

  const { navigate } = useNavigation();

  const fadeIn = useCallback(() => {
    Animated.sequence([
      Animated.timing(fadeAnim1, {
        useNativeDriver: true,
        toValue: 1,
        duration: 2000,
      }),
      Animated.timing(fadeAnim1, {
        useNativeDriver: true,
        toValue: 0,
        duration: 2000,
      }),
      Animated.timing(fadeAnim2, {
        useNativeDriver: true,
        toValue: 1,
        duration: 2000,
      }),
      Animated.timing(fadeAnim2, {
        useNativeDriver: true,
        toValue: 0,
        duration: 2000,
      }),
    ]).start(() => navigate('Onboarding1'));
  }, []);

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <Container>
      <StatusBar hidden />

      <Animated.View style={{ opacity: fadeAnim1 }}>
        <Logo source={logo} />
      </Animated.View>

      <Animated.View
        style={{ opacity: fadeAnim2, position: 'absolute', zIndex: 1 }}
      >
        <Name source={name} />
      </Animated.View>
    </Container>
  );
};

export default SplashScreen;
