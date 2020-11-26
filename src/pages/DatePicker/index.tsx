import React from 'react';
import { StatusBar, View } from 'react-native';
import Button from '../../components/Button';

import Calendar from '../../components/Calendar';

import {
  Container,
  Header,
  Title,
  DateContainer,
  DateLabel,
  DateInput,
  Content,
  MonthContainer,
  MonthYearText,
  CalendarHeader,
  WeekDayText,
 } from './style';

const DatePicker:React.FC = () => {

  return (
    <Container>
      <StatusBar barStyle='light-content' translucent/>
      <Header>
        <Title>Escolha a{"\n"}data e encontre{"\n"}um carro.</Title>

        <DateContainer>
        <View>
          <DateLabel>DE</DateLabel>
          <DateInput />
        </View>

        <View>
          <DateLabel>ATÉ</DateLabel>
          <DateInput />
        </View>
      </DateContainer>
      </Header>

      <Content>
        <Calendar />
        <Button text='Confirmar' />
      </Content>

    </Container>
  );
};

export default DatePicker;
