import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const CarContainer = styled.View`
  width: 100%;
  aspect-ratio: 2.2;
  padding: 24px 16px;

  background: #f4f5f6;

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
  color: #aeaeb3;
  text-transform: uppercase;
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

export const FuelIcon = styled(Feather).attrs({
  name: 'droplet',
  size: 22,
  color: '#AEAEB3',
})`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const IconContainer = styled.View`
  position: absolute;
  right: -24px;
  bottom: 0;
`;

export const CarImage = styled.Image`
  width: 60%;
  aspect-ratio: 2.3;
`;

export const PeriodContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-top-width: 2px;
  border-color: #fff;

  background: #f4f5f6;
  padding: 16px 8px;
`;

export const PeriodText = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 10px;
  color: #aeaeb3;
`;

export const DateText = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 13px;
  color: #47474d;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowRight = styled(Feather).attrs({
  name: 'arrow-right',
  size: 15,
  color: '#AEAEB3',
})`
  margin: 0px 4px;
`;

export const EndDateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-top-width: 2px;
  border-color: #fff;

  background: #daf3e5;
  padding: 16px 8px;
`;

export const EndDateText = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 15px;
  line-height: 16px;
  text-align: center;

  color: #03b352;
`;
