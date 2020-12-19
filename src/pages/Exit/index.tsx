import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StatusBar, Image } from 'react-native';
import LogoBackground from '../../assets/logo-background.png';
import Exit from '../../assets/Exit.png';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Title,
  SubTitle,
  ButtonsContainer,
  ButtonText,
  LoginButton,
  SignUpButton,
} from './styles';

const Onboarding3: React.FC = () => {
  const { goBack } = useNavigation();
  const { signOut } = useAuth();

  const handleExit = useCallback(() => {
    signOut();
  }, [signOut]);

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Image source={LogoBackground} />

      <Image source={Exit} />

      <Title>Sair do RENTX</Title>
      <SubTitle>
        Tem certeza que quer
        {'\n'}
        fazer isso?
      </SubTitle>

      <ButtonsContainer>
        <LoginButton onPress={handleGoBack}>
          <ButtonText>Não</ButtonText>
        </LoginButton>

        <SignUpButton onPress={handleExit}>
          <ButtonText>Sim</ButtonText>
        </SignUpButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Onboarding3;
