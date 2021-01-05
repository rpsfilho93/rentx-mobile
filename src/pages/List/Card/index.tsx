import React, { useMemo } from 'react';
import { Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { differenceInDays } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import Car from '../../../DTOS/Car';

import {
  Container,
  CarData,
  CarNameContainer,
  CarBrand,
  CarName,
  PriceContainer,
  PriceLabel,
  PriceText,
  IconContainer,
  CarImage,
} from './styles';

interface CardProps {
  car: Car;
  start: Date;
  end: Date;
}

const fuelIconStyles = {
  gas: <Feather name="droplet" size={22} color="#AEAEB3" />,
  eletric: <SimpleLineIcons name="energy" size={22} color="#AEAEB3" />,
  bio: <Ionicons name="md-leaf-outline" size={22} color="#AEAEB3" />,
};

const Card: React.FC<CardProps> = ({ car, start, end }) => {
  const interval = differenceInDays(end, start);
  const { navigate } = useNavigation();

  const fuelIcon = useMemo<string>(() => {
    const fuelSpec = car.specs.find(spec => spec.name === 'Fuel');
    return fuelSpec ? fuelSpec.icon : '';
  }, [car.specs]);

  return (
    <Container>
      <CarData>
        <CarNameContainer>
          <CarBrand>{car.brand.toUpperCase()}</CarBrand>
          <CarName>{car.name}</CarName>
        </CarNameContainer>
        <PriceContainer>
          <PriceLabel>
            {`POR ${interval} ${interval > 1 ? 'DIAS' : 'DIA'}`}
          </PriceLabel>
          <PriceText>{`R$ ${car.daily_value * interval}`}</PriceText>
        </PriceContainer>
        <IconContainer>
          {fuelIcon ? fuelIconStyles[fuelIcon] : fuelIconStyles.gas}
        </IconContainer>
      </CarData>
      <CarImage source={{ uri: car.CarImage[0].image_url }} />
    </Container>
  );
};

export default Card;
