import React, { useCallback, useState, useRef } from 'react';
import { KeyboardAvoidingView, Platform, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import PasswordInput from '../../components/PasswordInput';
import RememberButton from '../../components/RememberButton';

import {
  Container,
  Title,
  SubTitle,
  RememberContainer,
  SmallText,
  GoBackButton,
} from './styles';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { navigate } = useNavigation();
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const [remember, setRemember] = useState(false);

  const handleGoBack = useCallback(() => {
    navigate('Onboarding3');
  }, [navigate]);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      const { email, password } = data;
      await signIn({ email, password, remember });
    },
    [remember, signIn],
  );

  const handleRemember = useCallback(() => {
    setRemember(!remember);
  }, [remember]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <GoBackButton onPress={handleGoBack}>
            <Feather
              name="chevron-left"
              size={20}
              color="#AEAEB3"
              style={{ alignSelf: 'flex-start' }}
            />
          </GoBackButton>

          <Title>Estamos quase lá.</Title>
          <SubTitle>
            Faça seu login para começar uma experiência incrível.
          </SubTitle>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              icon="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              containerStyle={{ marginBottom: 8 }}
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />

            <PasswordInput
              ref={passwordInputRef}
              name="password"
              placeholder="Senha"
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
          </Form>

          <RememberContainer>
            <View style={{ flexDirection: 'row' }}>
              <RememberButton value={remember} onPress={handleRemember} />
              <SmallText>Lembrar-me</SmallText>
            </View>

            <TouchableOpacity>
              <SmallText>Esqueci minha senha</SmallText>
            </TouchableOpacity>
          </RememberContainer>

          <Button text="Login" />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
