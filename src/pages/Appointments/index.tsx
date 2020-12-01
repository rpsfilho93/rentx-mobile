import React from 'react';
import { StatusBar } from 'react-native';
import Card from './Card';

import { Container, Header, ListTitle, ListLegth, Content } from './styles';

const Appointments: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <ListTitle>Agendamentos</ListTitle>
        <ListLegth>5 períodos</ListLegth>
      </Header>

      <Content>
        <Card />
      </Content>
    </Container>
  );
};

export default Appointments;
