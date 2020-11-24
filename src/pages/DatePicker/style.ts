import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 292px;

  background: #1B1B1F;
  padding: 60px 24px 24px;
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
  color: #7A7A80;
`;

export const DateInput = styled.View`
  border-bottom-width: 1px;
  border-color: #7A7A80;

  width: 104px;
  height: 18px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 40px 24px;
`;

export const MonthContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;
`;

export const MonthYearText = styled.Text`
  font-size: 20px;
  font-family: 'Archivo_600SemiBold';
  color: #47474D;
`;

export const CalendarHeader = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding-bottom: 8px;

  border-bottom-width: 1px;
  border-color: #AEAEB3;

  margin-bottom: 16px;
`;

export const WeekDayText = styled.Text`
  font-size: 10px;
  font-family: 'Archivo_600SemiBold';
  color: #AEAEB3;
`;

