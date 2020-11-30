import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { Feather } from '@expo/vector-icons';
import Lancer from '../../assets/Lancer.png';

import {
  Container,
  Header,
  TitleContainer,
  TitleText,
  Content,
  ProfileContainer,
  Avatar,
  Name,
  SchedulesContainer,
  SchedulesText,
  SchedulesNumber,
  FavoriteCarContainer,
  FavoriteCarText,
  FavoriteCarNumber,
  Card,
  CarData,
  CarNameContainer,
  CarBrand,
  CarName,
  PriceContainer,
  PriceLabel,
  PriceText,
  FuelIcon,
  CarImage,
} from './styles';

const Profile: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateEdit = useCallback(() => {
    navigate('EditProfile');
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <TitleContainer>
          <TouchableOpacity onPress={navigateEdit}>
            <Feather name="edit-3" size={25} color="#AEAEB3" />
          </TouchableOpacity>
          <TitleText>Perfil</TitleText>
          <Feather name="power" size={25} color="#AEAEB3" />
        </TitleContainer>
      </Header>

      <Content>
        <ProfileContainer>
          <Avatar
            source={{ uri: 'https://www.hypeness.com.br/1/2020/01/Pug_02.jpg' }}
          />
          <Name>Thiago Luchtenberg</Name>
        </ProfileContainer>

        <SchedulesContainer>
          <SchedulesText>Agendamentos Feitos</SchedulesText>
          <SchedulesNumber>05</SchedulesNumber>
        </SchedulesContainer>

        <FavoriteCarContainer>
          <FavoriteCarText>Carro Favorito</FavoriteCarText>
          <FavoriteCarNumber>Utilizado 2 vezes</FavoriteCarNumber>
        </FavoriteCarContainer>

        <Card>
          <CarData>
            <CarNameContainer>
              <CarBrand>MITSUBISHI</CarBrand>
              <CarName>Lancer Evo X</CarName>
            </CarNameContainer>
            <PriceContainer>
              <PriceLabel>POR 3 DIAS</PriceLabel>
              <PriceText>R$ 290</PriceText>
              <FuelIcon />
            </PriceContainer>
          </CarData>
          <CarImage source={Lancer} />
        </Card>
      </Content>
    </Container>
  );
};

export default Profile;
