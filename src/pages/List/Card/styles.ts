import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  aspect-ratio: 2.2;
  padding: 24px 16px;

  background: #f4f5f6;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const CarData = styled.View`
  width: 30%;
  height: 100%;

  justify-content: space-between;
`;

export const CarNameContainer = styled.View``;

export const CarBrand = styled.Text`
  font-size: 10px;
  font-family: 'Archivo_500Medium';
  color: #aeaeb3;
`;

export const CarName = styled.Text`
  font-size: 15px;
  font-family: 'Archivo_500Medium';
  color: #47474d;
`;

export const PriceContainer = styled.View``;

export const PriceLabel = styled.Text`
  font-size: 10px;
  font-family: 'Archivo_500Medium';
  color: #aeaeb3;
`;

export const PriceText = styled.Text`
  font-size: 15px;
  font-family: 'Archivo_500Medium';
  color: #dc1637;
`;

export const IconContainer = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const CarImage = styled.Image`
  width: 60%;
  aspect-ratio: 2.2;
`;
