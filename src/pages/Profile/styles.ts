import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View``;

export const Header = styled.View`
  height: 28%;
  justify-content: flex-start;
  background: #1B1B1F;

  padding: 32px 16px 0px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  font-size: 25px;
  font-family: 'Archivo_600SemiBold';
  color: #fff;
`;

export const Content = styled.View`
  align-items: center;
  padding: 0px 24px;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;

export const Avatar = styled.Image`
  margin-top: -90px;
  width: 166px;
  height: 166px;
  border-radius: 83px;
  margin-bottom: 4px;
`;

export const Name = styled.Text`
  font-size: 28px;
  font-family: 'Archivo_600SemiBold';
  color: #3D3D4D;

  text-align: center;
`;

export const SchedulesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-color: #E6E6F0;

  padding-bottom: 12px;
  margin-bottom: 16px;
`;

export const SchedulesText = styled.Text`
  font-size: 15px;
  font-family: 'Inter_400Regular';
  color: #7A7A80;
`;

export const SchedulesNumber = styled.Text`
  font-size: 15px;
  font-family: 'Archivo_500Medium';
  color: #47474D;
`;

export const FavoriteCarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 26px;
`;

export const FavoriteCarText = styled.Text`
  font-size: 15px;
  font-family: 'Inter_400Regular';
  color: #7A7A80;
`;

export const FavoriteCarNumber = styled.Text`
  font-size: 15px;
  font-family: 'Archivo_500Medium';
  color: #47474D;
`;

export const Card = styled.View`
  width : 100%;
  aspect-ratio: 2.2;
  padding: 24px 16px;

  background: #F4F5F6;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CarData = styled.View`
  height: 100%;

  justify-content: space-between;
`;

export const CarNameContainer = styled.View``;

export const CarBrand = styled.Text`
  font-size: 10px;
  font-family: 'Archivo_500Medium';
  color: #AEAEB3;
`;

export const CarName = styled.Text`
  font-size: 15px;
  font-family: 'Archivo_500Medium';
  color: #47474D;
`;

export const PriceContainer = styled.View``;

export const PriceLabel = styled.Text`
  font-size: 10px;
  font-family: 'Archivo_500Medium';
  color: #AEAEB3;
`;

export const PriceText = styled.Text`
  font-size: 15px;
  font-family: 'Archivo_500Medium';
  color: #DC1637;
`;

export const FuelIcon = styled(Feather).attrs({
  name: 'droplet',
  size: 22,
  color: '#AEAEB3',
})`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const CarImage = styled.Image`
  width: 60%;
  aspect-ratio: 2;
`;
