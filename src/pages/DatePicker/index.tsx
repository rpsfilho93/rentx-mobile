import React, { useCallback, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { StatusBar, View } from 'react-native';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

import Calendar from '../../components/Calendar';
import { useDateRange } from '../../hooks/dateRange';

import {
  Container,
  Header,
  Title,
  DateContainer,
  DateLabel,
  DateText,
  EmptyDate,
  Content,
} from './style';

const DatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const { setDateRange } = useDateRange();
  const { navigate } = useNavigation();

  const handleOnCalendarChange = useCallback(
    (start: Date | undefined, end: Date | undefined) => {
      setStartDate(start);
      setEndDate(end);
    },
    [],
  );

  const formatDate = useCallback((date: Date) => {
    const dayMonthYear = format(date, 'dd MMMM yyyy', { locale: pt });
    return (
      dayMonthYear.slice(0, 3) +
      dayMonthYear.charAt(3).toUpperCase() +
      dayMonthYear.slice(4)
    );
  }, []);

  const handleConfirmButton = useCallback(() => {
    if (startDate && endDate) {
      setDateRange({ start: startDate, end: endDate });
      navigate('AppTabs');
    }
  }, [startDate, endDate, navigate, setDateRange]);

  return (
    <Container>
      <StatusBar barStyle="light-content" translucent />
      <Header>
        <Title>Escolha a data e encontre um carro.</Title>
        <DateContainer>
          <View>
            <DateLabel>DE</DateLabel>
            {startDate ? (
              <DateText>{formatDate(startDate)}</DateText>
            ) : (
                <EmptyDate />
              )}
          </View>

          <Feather name="arrow-right" size={20} color="#7A7A80" />

          <View>
            <DateLabel>ATÉ</DateLabel>
            {endDate ? (
              <DateText>{formatDate(endDate)}</DateText>
            ) : (
                <EmptyDate />
              )}
          </View>
        </DateContainer>
      </Header>

      <Content>
        <Calendar
          onChange={({ start, end }) => handleOnCalendarChange(start, end)}
        />
        <Button
          disabled={!startDate || !endDate}
          text="Confirmar"
          onPress={handleConfirmButton}
        />
      </Content>
    </Container>
  );
};

export default DatePicker;
