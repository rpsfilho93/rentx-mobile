import React, { useCallback } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

import Button from '../../components/Button';

import {
  Container,
  Header,
  Title,
  SubTitle,
  FormTitle,
  GoBackButton,
  PageIndicator,
  ActiveSquare,
  InactiveSquare,
} from './styles';
import PasswordInput from '../../components/PasswordInput';

const SignUp2:React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  const handleSubmit = useCallback(() => {
    navigate('SavedAccount');
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
        <Container >
          <StatusBar barStyle="dark-content" translucent backgroundColor="transparent"/>

          <Header>
            <GoBackButton onPress={handleGoBack}>
              <Feather name='chevron-left' size={20} color="#AEAEB3" style={{ alignSelf: 'flex-start'}} />
            </GoBackButton>

            <PageIndicator>
              <InactiveSquare />
              <ActiveSquare />
            </PageIndicator>
          </Header>
          <Title>Crie sua conta</Title>
          <SubTitle>Faça seu cadastro de forma rápida e fácil.</SubTitle>

          <FormTitle>2. Senha</FormTitle>

          <PasswordInput
            placeholder="Senha"
            containerStyle={{ marginBottom: 8 }}
          />
          <PasswordInput
            placeholder="Repetir senha"
            containerStyle={{ marginBottom: 16 }}
          />

          <Button text='Cadastrar' onPress={handleSubmit} />

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp2;
