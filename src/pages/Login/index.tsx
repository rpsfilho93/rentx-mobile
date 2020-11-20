import React, { useCallback } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

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
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Login:React.FC = () => {
  const { navigate } = useNavigation();

  const handleGoBack = useCallback(() => {
    navigate('Onboarding3');
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

          <GoBackButton onPress={handleGoBack}>
            <Feather name='chevron-left' size={20} color="#AEAEB3" style={{ alignSelf: 'flex-start'}} />
          </GoBackButton>

          <Title>Estamos quase lá.</Title>
          <SubTitle>Faça seu login para começar uma experiência incrível.</SubTitle>

          <Input
            icon='mail'
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            containerStyle={{ marginBottom: 8 }}
          />

          <PasswordInput placeholder="Senha" />

          <RememberContainer>
            <View style={{ flexDirection: 'row' }}>
              <RememberButton />
              <SmallText>Lembrar-me</SmallText>
            </View>

            <TouchableOpacity>
              <SmallText>Esqueci minha senha</SmallText>
            </TouchableOpacity>
          </RememberContainer>

          <Button text='Login' />

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
