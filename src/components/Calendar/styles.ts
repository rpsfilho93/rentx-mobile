import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const DateContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;
`;

export const MonthYearText = styled.Text`
  font-size: 20px;
  font-family: 'Archivo_600SemiBold';
  color: #47474d;
`;

export const CalendarHeader = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 0px 8px 8px;

  border-bottom-width: 1px;
  border-color: #aeaeb3;

  margin-bottom: 6px;
`;

export const WeekDayText = styled.Text`
  font-size: 10px;
  font-family: 'Archivo_600SemiBold';
  color: #aeaeb3;
  text-align: center;
  width: 32px;
`;

export const MonthContainer = styled(FlatList as new () => FlatList<Date>)``;

export const DayContainer = styled.TouchableOpacity<{ selected: boolean }>`
  flex-grow: 1;
  flex-basis: 0;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  background: ${props => (props.selected ? '#DC1637' : '#fff')};
`;

export const DayText = styled.Text`
  font-size: 15px;
  font-family: 'Inter_400Regular';
  color: #47474d;
`;
