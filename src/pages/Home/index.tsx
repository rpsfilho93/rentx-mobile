import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { pt } from 'date-fns/locale';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from './Card';
import { useDateRange } from '../../hooks/dateRange';
import Car from '../../DTOS/Car';

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
import api from '../../services/api';

const Home: React.FC = () => {
  const { start, end } = useDateRange();
  const { navigate } = useNavigation();

  const [cars, setCars] = useState<Car[]>();
  const [loading, setLoading] = useState(false);

  const formatDate = useCallback((date: Date) => {
    return format(date, 'dd MMMM yyyy', { locale: pt });
  }, []);

  const handleChevronDown = useCallback(() => {
    navigate('DatePicker');
  }, [navigate]);

  useEffect(() => {
    async function loadCars() {
      setLoading(true);

      const response = await api.get('/cars', {
        params: {
          start_date: start,
          end_date: end,
        },
      });

      console.log(response.data);

      setCars(response.data);
      setLoading(false);
    }

    loadCars();
  }, [start, end]);

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
            {cars && <ListLength>{`${cars?.length} carros`}</ListLength>}
            <FilterIcon />
          </ListHeaderItems>
        </ListHeader>

        {loading ? (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <ActivityIndicator size="large" color="#dc1637" />
          </View>
        ) : (
          <CarList
            data={cars}
            keyExtractor={car => car.id}
            renderItem={({ item }) => <Card car={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 152 }}
          />
        )}
      </Content>
    </Container>
  );
};

export default Home;
