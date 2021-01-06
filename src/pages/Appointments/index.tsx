import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RentalDTO from '../../DTOS/Rental';
import api from '../../services/api';
import Card from './Card';

import {
  Container,
  Header,
  ListTitle,
  ListLength,
  Content,
  RentalList,
} from './styles';

const Appointments: React.FC = () => {
  const [rentals, setRentals] = useState<RentalDTO[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadRentals() {
      setLoading(true);
      setRentals([]);
      const response = await api.get('/rentals');

      setRentals(response.data);
      setLoading(false);
    }

    loadRentals();
  }, []);

  const updateRentals = useCallback(async () => {
    setLoading(true);
    setRentals([]);
    const response = await api.get('/rentals');

    setRentals(response.data);
    setLoading(false);
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <ListTitle>Agendamentos</ListTitle>

        {!loading && (
          <ListLength>
            {rentals?.length !== 1
              ? `${rentals?.length} períodos`
              : `${rentals?.length} período`}
          </ListLength>
        )}
      </Header>

      <Content>
        {loading ? (
          <ActivityIndicator
            style={{ marginTop: '50%' }}
            size="large"
            color="#dc1637"
          />
        ) : (
            <RentalList
              data={rentals}
              keyExtractor={rental => rental.id}
              renderItem={({ item }) => <Card rental={item} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 128 }}
              ListFooterComponent={
                <TouchableOpacity onPress={updateRentals}>
                  <Feather name="refresh-cw" size={22} color="#dc1637" />
                </TouchableOpacity>
              }
              ListFooterComponentStyle={{ alignSelf: 'center' }}
            />
          )}
      </Content>
    </Container>
  );
};

export default Appointments;
