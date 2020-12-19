import React, { useCallback } from 'react';
import { Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoBackground from '../../assets/logo-background.png';
import Done from '../../assets/Done.png';

import { Container, Title, Subtitle, OkButton, OkButtonText } from './styles';

interface SuccessProps {
  title: string;
  subtitle: string;
}

const Success: React.FC<SuccessProps> = ({ title, subtitle }) => {
  const { navigate } = useNavigation();

  const handleOk = useCallback(() => {
    navigate('Login');
  }, [navigate]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Image source={LogoBackground} />

      <Image source={Done} />

      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>

      <OkButton onPress={handleOk}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default Success;
