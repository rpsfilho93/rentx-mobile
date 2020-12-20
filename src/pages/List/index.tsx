import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCars() {
      setLoading(true);
      const response = await api.get('/cars');
      setLoading(false);

      setCars(response.data);
    }

    loadCars();
  }, []);

  const handleSearch = useCallback(async (name: string) => {
    if (name) {
      setLoading(true);

      const response = await api.get('/cars', {
        params: {
          name,
        },
      });

      setLoading(false);

      setCars(response.data);
    } else {
      setLoading(true);

      const response = await api.get('/cars');

      setLoading(false);

      setCars(response.data);
    }
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <ListTitle>Listagem</ListTitle>
        <ListLegth>
          {!loading &&
            `${cars?.length} ${cars?.length > 1 ? 'carros' : 'carro'}`}
        </ListLegth>
      </Header>

      <Content>
        <SearchInput onPress={({ name }) => handleSearch(name)} />

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
            renderItem={({ item }) => (
              <Card car={item} start={start} end={end} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 128 }}
          />
        )}
      </Content>
    </Container>
  );
};

export default List;
