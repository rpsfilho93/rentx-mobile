import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 236px;

  background: #1b1b1f;
  padding: 40px 24px 8px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: 'Archivo_600SemiBold';
  color: #fff;

  margin-bottom: 48px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateLabel = styled.Text`
  font-size: 10px;
  font-family: 'Archivo_500Medium';
  color: #7a7a80;
`;

export const DateText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  color: #ffffff;
`;

export const EmptyDate = styled.View`
  border-bottom-width: 1px;
  border-color: #7a7a80;

  width: 104px;
  height: 18px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px 24px 8px;
`;

export const MonthContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
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

  padding-bottom: 8px;

  border-bottom-width: 1px;
  border-color: #aeaeb3;

  margin-bottom: 16px;
`;

export const WeekDayText = styled.Text`
  font-size: 10px;
  font-family: 'Archivo_600SemiBold';
  color: #aeaeb3;
`;
