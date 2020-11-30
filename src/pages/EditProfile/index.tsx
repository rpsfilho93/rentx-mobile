import React, { useCallback, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { StatusBar, View } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

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
import PasswordInput from '../../components/PasswordInput';

const EditProfile: React.FC = () => {
  const [tab, setTab] = useState(true);

  const handleTabs = useCallback(() => {
    setTab(!tab);
  }, [tab]);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <TitleContainer>
          <Feather name="chevron-left" size={25} color="#AEAEB3" />
          <TitleText>Editar Perfil</TitleText>
          <View />
        </TitleContainer>
      </Header>

      <Content>
        <AvatarContainer>
          <Avatar
            source={{ uri: 'https://www.hypeness.com.br/1/2020/01/Pug_02.jpg' }}
          />
          <CameraButton>
            <CameraIcon />
          </CameraButton>
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
            <Input icon="user" containerStyle={{ marginBottom: 8 }} />
            <Input icon="mail" />
            <Button text="Salvar Alterações" style={{ marginTop: 88 }} />
          </>
        ) : (
          <>
            <PasswordInput
              placeholder="Senha Atual"
              containerStyle={{ marginBottom: 8 }}
            />
            <PasswordInput
              placeholder="Senha"
              containerStyle={{ marginBottom: 8 }}
            />
            <PasswordInput placeholder="Repetir Senha" />
            <Button text="Salvar Alterações" style={{ marginTop: 24 }} />
          </>
        )}
      </Content>
    </Container>
  );
};

export default EditProfile;
