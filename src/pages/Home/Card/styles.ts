import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { ViewProps } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CarImageDTO } from '../../../DTOS/Car';

interface DotProps extends ViewProps {
  active?: boolean;
}

export const Container = styled.View`
  width: 100%;
  aspect-ratio: 1.1;
  background: #f4f5f6;

  padding: 24px 20px;

  align-items: center;
  justify-content: center;

  margin-bottom: 16px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;
`;

export const NameContainer = styled.View``;

export const BrandText = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 10px;
  color: #aeaeb3;
  text-transform: uppercase;
`;

export const NameText = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 20px;
  color: #47474d;
`;

export const PriceContainer = styled.View``;

export const PriceLabel = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 10px;
  color: #aeaeb3;
`;

export const PriceText = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 20px;
  color: #dc1637;
`;

export const ImagesContainer = styled(
  FlatList as new () => FlatList<CarImageDTO>,
)``;

export const ImageCanvas = styled.TouchableOpacity`
  width: 282px;
  aspect-ratio: 1.8;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;

export const CarImage = styled.Image`
  width: 100%;
  aspect-ratio: 2.1;
`;

export const FuelIcon = styled(Feather).attrs({
  name: 'droplet',
  size: 25,
  color: '#AEAEB3',
})``;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const PageIndicator = styled.View`
  flex-direction: row;
  jus
`;

export const Dot = styled.View<DotProps>`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: ${props => (props.active ? '#47474D' : '#aeaeb3')};

  margin-right: 8px;
`;
