import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { ViewProps, FlatList } from 'react-native';

import { CarImageDTO, SpecDTO } from '../../DTOS/Car';

interface DotProps extends ViewProps {
  active?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 80px;

  justify-content: center;
`;

export const CarData = styled.View`
  padding: 0px 16px;
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const ChevronLeft = styled(Feather).attrs({
  name: 'chevron-left',
  size: 22,
  color: '#AEAEB3',
})``;

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

export const ProductImage = styled.Image`
  align-self: center;
  height: 25%;
  aspect-ratio: 2.3;
`;

export const NamePriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 4px 0px;
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
  font-size: 25px;
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
  font-size: 25px;
  color: #dc1637;
`;

export const ImagesContainer = styled(
  FlatList as new () => FlatList<CarImageDTO>,
)``;

export const ImageCanvas = styled.View`
  width: 328px;
  aspect-ratio: 2.3;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;

export const CarImage = styled.Image`
  width: 90%;
  aspect-ratio: 2.1;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 16px 0px;
`;

export const DateLabel = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 10px;
  color: #aeaeb3;
`;

export const DateText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  color: #dc1637;
`;

export const ArrowRight = styled(Feather).attrs({
  name: 'arrow-right',
  size: 20,
  color: '#AEAEB3',
})``;

export const Footer = styled.View`
  width: 100%;
  height: 32%;
  background: #f4f5f6;
  padding: 16px;
`;

export const FooterData = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalContainer = styled.View``;

export const TotalLabel = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 10px;
  line-height: 11px;

  letter-spacing: 0.04px;
  text-transform: uppercase;

  color: #a0a0b3;

  margin-bottom: 4px;
`;

export const CalcText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  line-height: 18px;

  color: #47474d;
`;

export const TotalText = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 24px;
  line-height: 26px;
  text-align: right;

  color: #3d3d4d;
`;

export const SpecContainer = styled.View`
  height: 85px;
  width: 85px;
  background: #f4f5f6;
  margin: 2px;

  align-items: center;
  justify-content: center;
`;

export const Gear = styled.Image``;

export const SpecsContainer = styled(FlatList as new () => FlatList<SpecDTO>)``;

export const SpecText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 13px;
  line-height: 16px;

  text-align: center;

  color: #7a7a80;
  margin-top: 8px;
`;
