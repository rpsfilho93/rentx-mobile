import React from 'react';
import Lancer from '../../../assets/Lancer.png';

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

const Card: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Card;
