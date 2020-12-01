import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { ViewProps } from 'react-native';

interface DotProps extends ViewProps {
  active?: boolean;
}

export const Container = styled.View`
  width: 100%;
  aspect-ratio: 1.42;
  background: #f4f5f6;

  padding: 24px;

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

export const ProductImage = styled.Image`
  align-self: center;
  height: 65%;
  aspect-ratio: 2.22;
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
`;

export const Dot = styled.View<DotProps>`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: ${props => (props.active ? '#47474D' : '#aeaeb3')};

  margin-right: 8px;
`;
