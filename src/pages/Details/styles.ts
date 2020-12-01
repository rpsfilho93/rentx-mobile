import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { ViewProps, FlatList } from 'react-native';

interface DotProps extends ViewProps {
  active?: boolean;
}

export const Container = styled.View`
  height: 100%;
  padding-top: 40px;
`;

export const CarData = styled.View`
  padding: 0px 16px;
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
`;

export const ChevronLeft = styled(Feather).attrs({
  name: 'chevron-left',
  size: 20,
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
  height: 29%;
  aspect-ratio: 2.22;
`;

export const NamePriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 24px 0px;
`;

export const NameContainer = styled.View``;
export const BrandText = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 10px;
  color: #aeaeb3;
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

export const DetailsContainer = styled(FlatList as new () => FlatList)``;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const Footer = styled.View``;
