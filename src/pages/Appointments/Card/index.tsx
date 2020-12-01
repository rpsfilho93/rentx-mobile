import React from 'react';
import Lancer from '../../../assets/Lancer.png';

import {
  Container,
  CarContainer,
  CarData,
  CarNameContainer,
  CarBrand,
  CarName,
  PriceContainer,
  PriceLabel,
  PriceText,
  FuelIcon,
  CarImage,
  PeriodContainer,
  PeriodText,
  DateContainer,
  DateText,
  ArrowRight,
} from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <CarContainer>
        <CarData>
          <CarNameContainer>
            <CarBrand>MITSUBISHI</CarBrand>
            <CarName>Lancer Evo X</CarName>
          </CarNameContainer>
          <PriceContainer>
            <PriceLabel>POR 3 DIAS</PriceLabel>
            <PriceText>R$ 290</PriceText>
            <FuelIcon />
          </PriceContainer>
        </CarData>
        <CarImage source={Lancer} />
      </CarContainer>
      <PeriodContainer>
        <PeriodText>PERIODO</PeriodText>
        <DateContainer>
          <DateText>18 Junho 2019</DateText>
          <ArrowRight />
          <DateText>22 Junho 2019</DateText>
        </DateContainer>
      </PeriodContainer>
    </Container>
  );
};

export default Card;
