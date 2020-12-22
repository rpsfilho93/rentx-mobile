import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { ptBR } from 'date-fns/locale';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from './Card';
import { useDateRange } from '../../hooks/dateRange';
import Car from '../../DTOS/Car';
import api from '../../services/api';
import Filter, { FilterState } from './Filter';

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
  BackgroundOpacity,
} from './styles';

const Home: React.FC = () => {
  const { start, end } = useDateRange();
  const { navigate, setOptions } = useNavigation();

  const [cars, setCars] = useState<Car[]>();
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);

  const formatDate = useCallback((date: Date) => {
    return format(date, 'dd/MM/yyyy', { locale: ptBR });
  }, []);

  const handleChevronDown = useCallback(() => {
    navigate('DatePicker');
  }, [navigate]);

  const handleFilter = useCallback(() => {
    setOptions({
      tabBarVisible: false,
    });
    setFilter(!filter);
  }, [filter, setOptions]);

  const goBack = useCallback(() => {
    setFilter(false);
    setOptions({
      tabBarVisible: true,
    });
  }, [setOptions]);

  useEffect(() => {
    async function loadCars() {
      setLoading(true);

      const response = await api.get('/cars', {
        params: {
          start_date: start,
          end_date: end,
        },
      });

      setCars(response.data);
      setLoading(false);
    }

    loadCars();
  }, [start, end]);

  const filterSubmit = useCallback(
    async ({ fuel, transmission, startPrice, endPrice }: FilterState) => {
      setFilter(false);
      setOptions({
        tabBarVisible: true,
      });

      setLoading(true);

      const response = await api.get('/cars', {
        params: {
          start_price: startPrice,
          end_price: endPrice,
          fuel,
          transmission,
        },
      });

      setCars(response.data);
      setLoading(false);
    },
    [setOptions],
  );

  return (
    <>
      <Container>
        <StatusBar barStyle="light-content" />
        <Header>
          <View>
            <DateLabel>DE</DateLabel>
            {start ? <DateText>{formatDate(start)}</DateText> : <EmptyDate />}
          </View>

          <TouchableOpacity
            onPress={handleChevronDown}
            style={{ marginTop: 24 }}
          >
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
              {cars && (
                <ListLength>
                  {`${cars?.length} ${cars?.length !== 1 ? 'carros' : 'carro'}`}
                </ListLength>
              )}
              <TouchableOpacity onPress={handleFilter}>
                <FilterIcon />
              </TouchableOpacity>
            </ListHeaderItems>
          </ListHeader>

          {loading ? (
            <ActivityIndicator
              style={{ marginTop: '50%' }}
              size="large"
              color="#dc1637"
            />
          ) : (
              <CarList
                data={cars}
                keyExtractor={car => car.id}
                renderItem={({ item }) => <Card car={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
              />
            )}
        </Content>

        {filter && (
          <BackgroundOpacity onPress={goBack}>
            <Filter onSubmit={filterSubmit} />
          </BackgroundOpacity>
        )}
      </Container>
    </>
  );
};

export default Home;
