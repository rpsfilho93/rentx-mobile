import React, { useCallback, useState, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput,
  Alert,
  StatusBar,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import PasswordInput from '../../components/PasswordInput';
import RememberButton from '../../components/RememberButton';
import getValidationErrors from '../../utils/getValidationError';

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
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Use um e-mail válido.')
            .required('Insira um e-mail.'),
          password: Yup.string().required('Insira sua senha.'),
        });

        await schema.validate(data, { abortEarly: false });

        const { email, password } = data;

        await signIn({ email, password, remember });
      } catch (err) {
        setLoading(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          Alert.alert(
            'E-mail ou senha estão errados',
            'Por favor, tente novamente.',
          );
        }
      }
    },
    [remember, signIn],
  );

  const handleGoBack = useCallback(() => {
    Keyboard.dismiss();
    navigate('Onboarding3');
  }, [navigate]);

  const handleRemember = useCallback(() => {
    setRemember(!remember);
  }, [remember]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <StatusBar barStyle="dark-content" translucent />

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

          <Button
            text="Login"
            loading={loading}
            onPress={() => {
              formRef.current?.submitForm();
              Keyboard.dismiss();
            }}
          />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
