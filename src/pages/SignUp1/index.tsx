import React, { useCallback, useRef } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
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

interface FormData {
  name: string;
  email: string;
}

const SignUp1: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Insira seu nome'),
          email: Yup.string()
            .email('Use um e-mail válido.')
            .required('Insira um e-mail.'),
        });

        await schema.validate(data, { abortEarly: false });

        navigate('SignUp2', data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [navigate],
  );

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <StatusBar barStyle="dark-content" translucent />

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
              <ActiveSquare />
              <InactiveSquare />
            </PageIndicator>
          </Header>

          <Title>Crie sua conta</Title>
          <SubTitle>Faça seu cadastro de forma rápida e fácil.</SubTitle>

          <FormTitle>1. Dados</FormTitle>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="name"
              icon="user"
              placeholder="Nome"
              autoCorrect={false}
              returnKeyType="next"
              containerStyle={{ marginBottom: 8 }}
              onSubmitEditing={() => {
                emailInputRef.current?.focus();
              }}
            />

            <Input
              ref={emailInputRef}
              name="email"
              icon="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              containerStyle={{ marginBottom: 24 }}
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
          </Form>
          <Button
            text="Próximo"
            onPress={() => {
              Keyboard.dismiss();
              formRef.current?.submitForm();
            }}
          />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp1;
