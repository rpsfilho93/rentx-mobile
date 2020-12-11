import React, { useCallback, useMemo, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import { pt } from 'date-fns/locale';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  subDays,
  addDays,
  addMonths,
  subMonths,
  isBefore,
  isAfter,
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

interface CalendarPayload {
  start?: Date | undefined;
  end?: Date | undefined;
}

interface CalendarProps {
  onChange(payload: CalendarPayload): void;
}

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

const Calendar: React.FC<CalendarProps> = ({ onChange }) => {
  const [date, setDate] = useState<Date>(startOfMonth(new Date()));
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

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

  const handleLastMonth = useCallback(() => {
    setDate(subMonths(date, 1));
  }, [date]);

  const handleNextMonth = useCallback(() => {
    setDate(addMonths(date, 1));
  }, [date]);

  const handlePressDay = useCallback(
    (selected: Date) => {
      if (!startDate) {
        setStartDate(selected);
        onChange({ start: selected });
        return;
      }

      if (!endDate) {
        if (isBefore(startDate, selected)) {
          setEndDate(selected);
          onChange({ start: startDate, end: selected });
          return;
        }
        setEndDate(startDate);
        setStartDate(selected);
        onChange({ start: selected, end: startDate });
        return;
      }

      if (startDate && endDate) {
        setStartDate(selected);
        setEndDate(undefined);
        onChange({ start: selected });
      }
    },
    [startDate, endDate, onChange],
  );

  const renderDay = useCallback(
    (day: Date) => {
      const disabled = isBefore(day, new Date());
      const selected = day === startDate || day === endDate;
      const inRange =
        startDate &&
        endDate &&
        isAfter(day, startDate) &&
        isBefore(day, endDate);

      return (
        <DayContainer
          selected={!disabled && selected}
          inRange={!disabled && inRange}
          onPress={() => {
            if (!disabled) handlePressDay(day);
          }}
        >
          <DayText
            disabled={disabled}
            selected={!disabled && selected}
            inRange={!disabled && inRange}
          >
            {format(day, 'd')}
          </DayText>
        </DayContainer>
      );
    },
    [handlePressDay, startDate, endDate],
  );

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

      {(!startDate || !endDate || (startDate && endDate)) && (
        <MonthContainer
          data={daysInMonth}
          keyExtractor={item => item.toDateString()}
          numColumns={7}
          renderItem={({ item }: { item: Date }) => renderDay(item)}
        />
      )}
    </Container>
  );
};

export default Calendar;
