import React from 'react';
import { StatusBar } from 'react-native';
import Card from './Card';

import { Container, Header, ListTitle, ListLength, Content } from './styles';

const Appointments: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <ListTitle>Agendamentos</ListTitle>
        <ListLength>5 períodos</ListLength>
      </Header>

      <Content>
        <Card />
      </Content>
    </Container>
  );
};

export default Appointments;
