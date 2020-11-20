import React, { useCallback } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

import Input from '../../components/Input';
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


const SignUp1:React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  const handleSubmit = useCallback(() => {
    navigate('SignUp2');
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
              <ActiveSquare />
              <InactiveSquare />
            </PageIndicator>
          </Header>

          <Title>Crie sua conta</Title>
          <SubTitle>Faça seu cadastro de forma rápida e fácil.</SubTitle>

          <FormTitle>1. Dados</FormTitle>

          <Input
            icon='user'
            placeholder="Nome"
            autoCorrect={false}
            returnKeyType="next"
            containerStyle={{ marginBottom: 8 }}
          />

          <Input
            icon='mail'
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            containerStyle={{ marginBottom: 24 }}
          />

          <Button text='Próximo' onPress={handleSubmit} />

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp1;
