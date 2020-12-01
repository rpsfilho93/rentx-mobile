import React from 'react';
import { View } from 'react-native';

import Lambo from '../../assets/Lambo.png';

import {
  Container,
  CarData,
  Header,
  ChevronLeft,
  PageIndicator,
  Dot,
  ProductImage,
  NamePriceContainer,
  NameContainer,
  BrandText,
  NameText,
  PriceContainer,
  PriceLabel,
  PriceText,
  DetailsContainer,
  DateContainer,
  DateLabel,
  DateText,
  ArrowRight,
  Footer,
} from './styles';

const Details: React.FC = () => {
  return (
    <Container>
      <CarData>
        <Header>
          <ChevronLeft />
          <PageIndicator>
            <Dot active />
            <Dot />
            <Dot />
            <Dot />
          </PageIndicator>
        </Header>

        <ProductImage source={Lambo} />

        <NamePriceContainer>
          <NameContainer>
            <BrandText>LAMBORGHINI</BrandText>
            <NameText>Huracan</NameText>
          </NameContainer>

          <PriceContainer>
            <PriceLabel>AO DIA</PriceLabel>
            <PriceText>R$ 580</PriceText>
          </PriceContainer>
        </NamePriceContainer>

        <DateContainer>
          <View>
            <DateLabel>DE</DateLabel>
            <DateText>16 Julho 2020</DateText>
          </View>

          <ArrowRight />

          <View>
            <DateLabel>ATÉ</DateLabel>
            <DateText>20 Julho 2020</DateText>
          </View>
        </DateContainer>
      </CarData>
      <Footer />
    </Container>
  );
};

export default Details;
