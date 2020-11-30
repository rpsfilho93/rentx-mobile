import React from 'react';
import { StatusBar, View } from 'react-native';

import Card from './Card';
import Lambo from '../../assets/Lambo.png';

import {
  Container,
  Header,
  DateLabel,
  DateText,
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
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <View>
          <DateLabel>DE</DateLabel>
          <DateText>16 Julho 2020</DateText>
        </View>

        <ChevronDown />

        <View>
          <DateLabel>ATÉ</DateLabel>
          <DateText>20 Julho 2020</DateText>
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
      </Content>
    </Container>
  );
};

export default Home;
