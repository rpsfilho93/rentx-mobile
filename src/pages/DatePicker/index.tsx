import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StatusBar, View } from 'react-native';

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
        <MonthContainer>
          <MonthYearText>Julho 2020</MonthYearText>

          <View style={{ flexDirection: 'row' }}>
            <Feather name='chevron-left' size={20} color='#7A7A80' style={{ marginRight: 16 }} />
            <Feather name='chevron-right' size={20} color='#7A7A80' />
          </View>
        </MonthContainer>

        <CalendarHeader>
          <WeekDayText>SEG</WeekDayText>
          <WeekDayText>TER</WeekDayText>
          <WeekDayText>QUA</WeekDayText>
          <WeekDayText>QUI</WeekDayText>
          <WeekDayText>SEX</WeekDayText>
          <WeekDayText>SAB</WeekDayText>
          <WeekDayText>DOM</WeekDayText>
        </CalendarHeader>

      </Content>

    </Container>
  );
};

export default DatePicker;
