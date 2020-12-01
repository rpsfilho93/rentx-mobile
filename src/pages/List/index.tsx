import React from 'react';
import { StatusBar } from 'react-native';
import SearchInput from './SearchInput';
import Card from './Card';

import { Container, Header, ListTitle, ListLegth, Content } from './styles';

const List: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <ListTitle>Listagem</ListTitle>
        <ListLegth>12 carros</ListLegth>
      </Header>

      <Content>
        <SearchInput />
        <Card />
      </Content>
    </Container>
  );
};

export default List;
