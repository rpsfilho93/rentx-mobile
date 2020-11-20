import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';

import logo from '../../assets/Union.png';
import { Container, Logo, Title, SubTitle, ButtonsContainer, ButtonText, GoBackButton, GoBackButtonText, LoginButton, SignUpButton } from './styles';

const Onboarding3:React.FC = () => {

  const { navigate } = useNavigation();

  const handleGoback = useCallback(() => {
    navigate('Onboarding1');
  }, []);

  const handleLogin = useCallback(() => {
    navigate('Login');
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>

      <Logo source={logo} />
      <Title>Seja{"\n"}bem-vindo</Title>
      <SubTitle>O que você deseja fazer?</SubTitle>

      <ButtonsContainer>
        <LoginButton onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </LoginButton>

        <SignUpButton>
          <ButtonText>Cadastro</ButtonText>
        </SignUpButton>
      </ButtonsContainer>

      <GoBackButton onPress={handleGoback}>
          <GoBackButtonText>Voltar</GoBackButtonText>
        </GoBackButton>
    </Container>
  );
};

export default Onboarding3;
