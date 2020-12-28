import React, { useCallback, useState, useRef } from 'react';
import {
  Alert,
  StatusBar,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import PasswordInput from '../../components/PasswordInput';
import { useAuth } from '../../hooks/auth';
import defaultAvatar from '../../assets/user.png';
import api from '../../services/api';
import ImagePickerButton from '../../components/ImagePicker';
import getValidationErrors from '../../utils/getValidationError';

import {
  Container,
  Header,
  TitleContainer,
  TitleText,
  Content,
  Avatar,
  AvatarContainer,
  TabContainer,
  Tab,
} from './styles';

interface FormData1 {
  name: string;
  email: string;
}

interface FormData2 {
  password: string;
  oldPassword: string;
  repeatPassword: string;
}

const EditProfile: React.FC = () => {
  const { user, updateUser } = useAuth();
  const { navigate } = useNavigation();
  const [tab, setTab] = useState(true);
  const formRef1 = useRef<FormHandles>(null);
  const formRef2 = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null);

  const passwordInputRef = useRef<TextInput>(null);
  const repeatPasswordInputRef = useRef<TextInput>(null);

  const [loading, setLoading] = useState(false);

  const { goBack } = useNavigation();

  const handleTabs = useCallback(() => {
    setTab(!tab);
  }, [tab]);

  const handleSubmit1 = useCallback(
    async (data: FormData1) => {
      try {
        setLoading(true);
        formRef1.current?.setErrors({});

        const { name, email } = data;

        const schema = Yup.object().shape({
          name: Yup.string().required('Insira seu nome.'),
          email: Yup.string()
            .email('Insira um e-mail válido.')
            .required('Insira seu e-mail.'),
        });

        await schema.validate(data, { abortEarly: false });

        const response = await api.put('/profile', {
          name,
          email,
        });

        updateUser(response.data);
        setLoading(false);

        navigate('ProfileSaved');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef1.current?.setErrors(errors);
        } else {
          Alert.alert('Este e-mail já está em uso.');
        }
      }
    },
    [updateUser, navigate],
  );

  const handleSubmit2 = useCallback(
    async (data: FormData2) => {
      try {
        setLoading(true);
        formRef2.current?.setErrors({});

        const { password, oldPassword } = data;

        const schema = Yup.object().shape({
          oldPassword: Yup.string().required('Insira a senha atual.'),
          password: Yup.string().required('Insira uma nova senha.'),
          repeatPassword: Yup.string()
            .required('Repita a senha.')
            .equals([Yup.ref('password')], 'As senhas devem ser identicas.'),
        });

        await schema.validate(data, { abortEarly: false });

        const response = await api.put('/profile', {
          name: user.name,
          email: user.email,
          password,
          old_password: oldPassword,
        });

        updateUser(response.data);
        setLoading(false);

        navigate('ProfileSaved');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef2.current?.setErrors(errors);
        } else {
          Alert.alert('A senha está incorreta');
        }
      }
    },
    [updateUser, user.name, user.email, navigate],
  );

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

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
          <StatusBar barStyle="light-content" />
          <Header>
            <TitleContainer>
              <TouchableOpacity onPress={handleGoBack}>
                <Feather name="chevron-left" size={25} color="#AEAEB3" />
              </TouchableOpacity>
              <TitleText>Editar Perfil</TitleText>
              <View />
            </TitleContainer>
          </Header>

          <Content>
            <AvatarContainer>
              <Avatar
                source={
                  user.image_url ? { uri: user.image_url } : defaultAvatar
                }
              />
              <ImagePickerButton />
            </AvatarContainer>

            <TabContainer>
              <Tab selected={tab} onPress={handleTabs}>
                Dados
              </Tab>
              <Tab selected={!tab} onPress={handleTabs}>
                Trocar senha
              </Tab>
            </TabContainer>

            {tab ? (
              <>
                <Form
                  initialData={{ name: user.name, email: user.email }}
                  ref={formRef1}
                  onSubmit={handleSubmit1}
                >
                  <Input
                    name="name"
                    icon="user"
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
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="send"
                    onSubmitEditing={() => {
                      formRef1.current?.submitForm();
                    }}
                  />
                </Form>
                <Button
                  text="Salvar Alterações"
                  loading={loading}
                  onPress={() => {
                    formRef1.current?.submitForm();
                    Keyboard.dismiss();
                  }}
                  style={{ marginTop: 88 }}
                />
              </>
            ) : (
                <>
                  <Form ref={formRef2} onSubmit={handleSubmit2}>
                    <PasswordInput
                      name="oldPassword"
                      placeholder="Senha Atual"
                      returnKeyType="next"
                      containerStyle={{ marginBottom: 8 }}
                      onSubmitEditing={() => passwordInputRef.current?.focus()}
                    />
                    <PasswordInput
                      ref={passwordInputRef}
                      name="password"
                      placeholder="Senha"
                      returnKeyType="next"
                      containerStyle={{ marginBottom: 8 }}
                      onSubmitEditing={() =>
                        repeatPasswordInputRef.current?.focus()}
                    />
                    <PasswordInput
                      ref={repeatPasswordInputRef}
                      name="repeatPassword"
                      placeholder="Repetir Senha"
                      returnKeyType="send"
                      onSubmitEditing={() => formRef2.current?.submitForm()}
                    />
                  </Form>
                  <Button
                    text="Salvar Alterações"
                    loading={loading}
                    style={{ marginTop: 24 }}
                    onPress={() => {
                      formRef2.current?.submitForm();
                      Keyboard.dismiss();
                    }}
                  />
                </>
              )}
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
