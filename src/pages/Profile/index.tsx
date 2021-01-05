import React, { useCallback, useEffect, useState } from 'react';
import { Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, StatusBar } from 'react-native';

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
  IconContainer,
  CarImage,
} from './styles';
import api from '../../services/api';

const fuelIcon = {
  gas: <Feather name="droplet" size={22} color="#AEAEB3" />,
  eletric: <SimpleLineIcons name="energy" size={22} color="#AEAEB3" />,
  bio: <Ionicons name="md-leaf-outline" size={24} color="#AEAEB3" />,
};

const Profile: React.FC = () => {
  const { navigate } = useNavigation();
  const { user, updateUser } = useAuth();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      setLoading(true);
      const response = await api.get('/profile');

      updateUser(response.data);
      setLoading(false);
    }

    loadProfile();
  }, [updateUser]);

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
            source={
              user.image_url && !loading
                ? { uri: user.image_url }
                : defaultAvatar
            }
          />
          <Name>{user.name}</Name>
        </ProfileContainer>

        {loading ? (
          <ActivityIndicator size="large" color="#dc1637" />
        ) : (
            <SchedulesContainer>
              <SchedulesText>Agendamentos Feitos</SchedulesText>
              <SchedulesNumber>
                {user.favoriteCar ? user.rentals : 0}
              </SchedulesNumber>
            </SchedulesContainer>
          )}

        {user.favoriteCar && !loading && (
          <>
            <FavoriteCarContainer>
              <FavoriteCarText>Carro Favorito</FavoriteCarText>
              <FavoriteCarNumber>
                {`Utilizado ${user.favoriteCar.occurrences} ${user.favoriteCar.occurrences > 1 ? 'vezes' : 'vez'
                  }`}
              </FavoriteCarNumber>
            </FavoriteCarContainer>

            <Card>
              <CarData>
                <CarNameContainer>
                  <CarBrand>{user.favoriteCar.brand}</CarBrand>
                  <CarName>{user.favoriteCar.name}</CarName>
                </CarNameContainer>
                <PriceContainer>
                  <PriceLabel>POR 1 DIA</PriceLabel>
                  <PriceText>{`R$ ${user.favoriteCar.daily_value}`}</PriceText>
                  <IconContainer>
                    {fuelIcon[user.favoriteCar.fuel]}
                  </IconContainer>
                </PriceContainer>
              </CarData>
              <CarImage source={{ uri: user.favoriteCar.image_url }} />
            </Card>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Profile;
