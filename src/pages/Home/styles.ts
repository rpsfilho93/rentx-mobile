import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import Car from '../../DTOS/Car';

export const Container = styled.View`
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 15%;

  background: #1b1b1f;
  padding: 32px 24px 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateLabel = styled.Text`
  font-size: 10px;
  font-family: 'Archivo_500Medium';
  color: #7a7a80;
  margin-bottom: 4px;
`;

export const DateText = styled.Text`
  font-size: 15px;
  font-family: 'Inter_500Medium';
  color: #fff;
`;

export const EmptyDate = styled.View`
  border-bottom-width: 1px;
  border-color: #7a7a80;

  width: 104px;
  height: 18px;
`;

export const ChevronDown = styled(Feather).attrs({
  name: 'chevron-down',
  size: 22,
  color: '#7a7a80',
})``;

export const Content = styled.View`
  padding: 0px 16px;
  background: #fff;
  height: 100%;
`;
export const ListHeader = styled.View`
  padding: 24px 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ListHeaderItems = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ResultsText = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 25px;
  line-height: 27px;
`;

export const ListLength = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 13px;
  color: #aeaeb3;

  margin-right: 16px;
`;

export const FilterIcon = styled(Feather).attrs({
  name: 'sliders',
  size: 20,
  color: '#47474D',
})``;

export const CarList = styled(FlatList as new () => FlatList<Car>)``;

export const BackgroundOpacity = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(2, 2, 2, 0.8);
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
