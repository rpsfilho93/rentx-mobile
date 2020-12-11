import React, { useCallback } from 'react';
import { StatusBar, View } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { pt } from 'date-fns/locale';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from './Card';
import Lambo from '../../assets/Lambo.png';
import { useDateRange } from '../../hooks/dateRange';

import {
  Container,
  Header,
  DateLabel,
  DateText,
  EmptyDate,
  ChevronDown,
  Content,
  ListHeader,
  ListHeaderItems,
  ResultsText,
  ListLength,
  FilterIcon,
  CarList,
} from './styles';

const Home: React.FC = () => {
  const { start, end } = useDateRange();
  const { navigate } = useNavigation();

  const formatDate = useCallback((date: Date) => {
    return format(date, 'dd MMMM yyyy', { locale: pt });
  }, []);

  const handleChevronDown = useCallback(() => {
    navigate('DatePicker');
  }, [navigate]);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <View>
          <DateLabel>DE</DateLabel>
          {start ? <DateText>{formatDate(start)}</DateText> : <EmptyDate />}
        </View>

        <TouchableOpacity onPress={handleChevronDown} style={{ marginTop: 24 }}>
          <ChevronDown />
        </TouchableOpacity>

        <View>
          <DateLabel>ATÉ</DateLabel>
          {end ? <DateText>{formatDate(end)}</DateText> : <EmptyDate />}
        </View>
      </Header>

      <Content>
        <ListHeader>
          <ResultsText>Resultados</ResultsText>
          <ListHeaderItems>
            <ListLength>3 carros</ListLength>
            <FilterIcon />
          </ListHeaderItems>
        </ListHeader>

        <Card brand="Lamborghini" name="Huracan" image={Lambo} price={580} />
        <Card brand="Lamborghini" name="Huracan" image={Lambo} price={580} />
      </Content>
    </Container>
  );
};

export default Home;
