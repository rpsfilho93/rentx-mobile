import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { useDateRange } from '../../hooks/dateRange';
import SearchInput from './SearchInput';
import Card from './Card';
import api from '../../services/api';
import Car from '../../DTOS/Car';

import {
  Container,
  Header,
  ListTitle,
  ListLegth,
  Content,
  CarList,
} from './styles';

const List: React.FC = () => {
  const { start, end } = useDateRange();
  const [cars, setCars] = useState<Car[]>();

  useEffect(() => {
    async function loadCars() {
      const response = await api.get('/cars', {
        params: {
          start_date: start,
          end_date: end,
        },
      });

      setCars(response.data);
    }

    loadCars();
  }, [start, end]);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <ListTitle>Listagem</ListTitle>
        <ListLegth>12 carros</ListLegth>
      </Header>

      <Content>
        <SearchInput />
        <CarList
          data={cars}
          keyExtractor={car => car.id}
          renderItem={({ item }) => <Card car={item} start={start} end={end} />}
        />
      </Content>
    </Container>
  );
};

export default List;
