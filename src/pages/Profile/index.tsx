import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { Feather } from '@expo/vector-icons';
import Lancer from '../../assets/Lancer.png';

import defaultAvatar from '../../assets/user.png';
import { useAuth } from '../../hooks/auth';

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
  const { user } = useAuth();

  const navigateEdit = useCallback(() => {
    navigate('EditProfile');
  }, [navigate]);

  const handleExit = useCallback(() => {
    navigate('Exit');
  }, [navigate]);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <TitleContainer>
          <TouchableOpacity onPress={navigateEdit}>
            <Feather name="edit-3" size={25} color="#AEAEB3" />
          </TouchableOpacity>
          <TitleText>Perfil</TitleText>

          <TouchableOpacity onPress={handleExit}>
            <Feather name="power" size={25} color="#AEAEB3" />
          </TouchableOpacity>
        </TitleContainer>
      </Header>

      <Content>
        <ProfileContainer>
          <Avatar
            source={user.image_url ? { uri: user.image_url } : defaultAvatar}
          />
          <Name>{user.name}</Name>
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
