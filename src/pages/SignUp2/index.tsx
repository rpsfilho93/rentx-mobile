import React, { useCallback, useRef } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TextInput,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { AuthParamList } from '../../routes/auth.routes';
import Button from '../../components/Button';
import PasswordInput from '../../components/PasswordInput';
import getValidationErrors from '../../utils/getValidationError';

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
import api from '../../services/api';

type LogonScreenRouteProp = RouteProp<AuthParamList, 'SignUp2'>;

interface DataForm {
  password: string;
  repeatPassword: string;
}

const SignUp2: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const { params } = useRoute<LogonScreenRouteProp>();

  const { name, email } = params;
  const formRef = useRef<FormHandles>(null);
  const repeatPasswordInputRef = useRef<TextInput>(null);

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSubmit = useCallback(
    async (data: DataForm) => {
      try {
        formRef.current?.setErrors({});

        const { password } = data;

        const schema = Yup.object().shape({
          password: Yup.string().required('Insira uma senha'),
          repeatPassword: Yup.string()
            .required('Digite a senha novamente.')
            .equals([Yup.ref('password')], 'As senhas devem ser identicas.'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/users', {
          name,
          email,
          password,
        });

        navigate('SavedAccount');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          Alert.alert('Este e-mail já está em uso.');
          goBack();
        }
      }
    },
    [goBack, navigate, name, email],
  );

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
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />

          <Header>
            <GoBackButton onPress={handleGoBack}>
              <Feather
                name="chevron-left"
                size={20}
                color="#AEAEB3"
                style={{ alignSelf: 'flex-start' }}
              />
            </GoBackButton>

            <PageIndicator>
              <InactiveSquare />
              <ActiveSquare />
            </PageIndicator>
          </Header>
          <Title>Crie sua conta</Title>
          <SubTitle>Faça seu cadastro de forma rápida e fácil.</SubTitle>

          <FormTitle>2. Senha</FormTitle>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <PasswordInput
              name="password"
              placeholder="Senha"
              returnKeyType="next"
              containerStyle={{ marginBottom: 8 }}
              onSubmitEditing={() => {
                repeatPasswordInputRef.current?.focus();
              }}
            />
            <PasswordInput
              ref={repeatPasswordInputRef}
              name="repeatPassword"
              placeholder="Repetir senha"
              containerStyle={{ marginBottom: 16 }}
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
          </Form>
          <Button
            text="Cadastrar"
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

export default SignUp2;
