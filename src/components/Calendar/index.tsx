import React, { useCallback, useMemo, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacityProps, View } from 'react-native';
import pt, {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  subDays,
  addDays,
  getMonth,
  addMonths,
  subMonths,
} from 'date-fns';

import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container,
  DateContainer,
  MonthYearText,
  CalendarHeader,
  WeekDayText,
  DayContainer,
  MonthContainer,
  DayText,
} from './styles';

const addDaysOfLastMonth = (days: Date[]) => {
  if (getDay(days[0]) !== 0) {
    days.unshift(subDays(days[0], 1));
    addDaysOfLastMonth(days);
  }
};

const addDaysOfNextMonth = (daysInMonth: Date[]) => {
  if (getDay(daysInMonth[daysInMonth.length - 1]) !== 6) {
    daysInMonth.push(addDays(daysInMonth[daysInMonth.length - 1], 1));
    addDaysOfNextMonth(daysInMonth);
  }
};

interface DayProps extends TouchableOpacityProps {
  date: Date;
  selected?: boolean;
}

const Day: React.FC<DayProps> = ({ date, selected = false, disabled }) => {
  const [isSelected, setIsSelected] = useState(selected);

  const color = useMemo(() => {
    return disabled ? '#AEAEB3' : isSelected ? '#fff' : '#47474D';
  }, [disabled, isSelected]);

  const handlePress = useCallback(() => {
    if (!disabled) setIsSelected(!isSelected);
  }, [isSelected]);

  return (
    <DayContainer onPress={handlePress} selected={isSelected}>
      <DayText style={{ color }}>{format(date, 'd')}</DayText>
    </DayContainer>
  );
};

const Calendar: React.FC = () => {
  const [date, setDate] = useState<Date>(startOfMonth(new Date()));
  const [from, setFrom] = useState<number>(-1);
  const [to, setTo] = useState<number>(-1);

  const daysInMonth: Date[] = useMemo(() => {
    const firstDay = startOfMonth(date);
    const lastDay = endOfMonth(date);

    const days = eachDayOfInterval({ start: firstDay, end: lastDay });

    addDaysOfLastMonth(days);
    addDaysOfNextMonth(days);

    return days;
  }, [date]);

  const dateFormatted = useMemo(() => {
    const monthYear = format(date, 'MMMM yyyy', { locale: pt });
    return monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
  }, [date]);

  const selectDay = useCallback((index: number) => {
    console.log(index);
    if (!from && !to) setFrom(index);

    if (from && !to) setTo(index);

    if (from && to) {
      if (index < to) setFrom(index);
      if (index > to) setTo(index);
    }

    console.log([from, to]);
  }, []);

  const handleLastMonth = useCallback(() => {
    setDate(subMonths(date, 1));
  }, [date]);

  const handleNextMonth = useCallback(() => {
    setDate(addMonths(date, 1));
  }, [date]);

  return (
    <Container>
      <DateContainer>
        <MonthYearText>{dateFormatted}</MonthYearText>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={handleLastMonth}>
            <Feather
              name="chevron-left"
              size={20}
              color="#7A7A80"
              style={{ marginRight: 16 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNextMonth}>
            <Feather name="chevron-right" size={20} color="#7A7A80" />
          </TouchableOpacity>
        </View>
      </DateContainer>

      <CalendarHeader>
        <WeekDayText>DOM</WeekDayText>
        <WeekDayText>SEG</WeekDayText>
        <WeekDayText>TER</WeekDayText>
        <WeekDayText>QUA</WeekDayText>
        <WeekDayText>QUI</WeekDayText>
        <WeekDayText>SEX</WeekDayText>
        <WeekDayText>SAB</WeekDayText>
      </CalendarHeader>

      <MonthContainer
        data={daysInMonth}
        keyExtractor={item => item.toDateString()}
        numColumns={7}
        renderItem={({ item, index }: { item: Date; index: number }) => {
          return (
            <Day date={item} disabled={getMonth(item) !== getMonth(date)} />
          );
        }}
      />
    </Container>
  );
};

export default Calendar;
