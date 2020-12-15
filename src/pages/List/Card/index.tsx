import { differenceInDays } from 'date-fns';
import React from 'react';
import { Car } from '..';

import {
  Container,
  CarData,
  CarNameContainer,
  CarBrand,
  CarName,
  PriceContainer,
  PriceLabel,
  PriceText,
  FuelIcon,
  CarImage,
} from './styles';

interface CardProps {
  car: Car;
  start: Date;
  end: Date;
}

const Card: React.FC<CardProps> = ({ car, start, end }) => {
  const interval = differenceInDays(end, start);

  return (
    <Container>
      <CarData>
        <CarNameContainer>
          <CarBrand>{car.brand.toUpperCase()}</CarBrand>
          <CarName>{car.name}</CarName>
        </CarNameContainer>
        <PriceContainer>
          <PriceLabel>{`POR ${interval} DIAS`}</PriceLabel>
          <PriceText>{`R$ ${car.daily_value * interval}`}</PriceText>
          <FuelIcon />
        </PriceContainer>
      </CarData>
    </Container>
  );
};

export default Card;
