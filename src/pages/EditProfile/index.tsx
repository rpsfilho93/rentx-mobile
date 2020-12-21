import React, { useCallback, useState, useRef } from 'react';
import {
  StatusBar,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import Input from '../../components/Input';
import Button from '../../components/Button';
import PasswordInput from '../../components/PasswordInput';
import { useAuth } from '../../hooks/auth';
import defaultAvatar from '../../assets/user.png';

import {
  Container,
  Header,
  TitleContainer,
  TitleText,
  Content,
  Avatar,
  AvatarContainer,
  CameraButton,
  CameraIcon,
  TabContainer,
  Tab,
} from './styles';
import api from '../../services/api';
import ImagePickerButton from '../../components/ImagePicker';

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

  const { goBack } = useNavigation();

  const handleTabs = useCallback(() => {
    setTab(!tab);
  }, [tab]);

  const handleSubmit1 = useCallback(
    async (data: FormData1) => {
      const { name, email } = data;

      const response = await api.put('/profile', {
        name,
        email,
      });

      updateUser(response.data);
      navigate('SavedProfile');
    },
    [updateUser, navigate],
  );

  const handleSubmit2 = useCallback(
    async (data: FormData2) => {
      const { password, oldPassword } = data;

      const response = await api.put('/profile', {
        name: user.name,
        email: user.email,
        password,
        old_password: oldPassword,
      });

      updateUser(response.data);
      navigate('SavedProfile');
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
                  onPress={() => formRef1.current?.submitForm()}
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
                    style={{ marginTop: 24 }}
                    onPress={() => formRef2.current?.submitForm()}
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
