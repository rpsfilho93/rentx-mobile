import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';
import RentalDTO from '../../DTOS/Rental';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 16%;
  background: #1b1b1f;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 64px 24px;
`;

export const ListTitle = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 25px;

  color: #ffffff;
`;

export const ListLength = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 13px;

  color: #7a7a80;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 16px 16px;
  background: #fff;
`;

export const RentalList = styled(FlatList as new () => FlatList<RentalDTO>)``;
