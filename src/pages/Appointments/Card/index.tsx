import React, { useCallback, useMemo } from 'react';
import PropTypes, { string } from 'prop-types';
import {
  differenceInDays,
  format,
  isWithinInterval,
  startOfDay,
  endOfDay,
} from 'date-fns';
import { pt } from 'date-fns/locale';
import { Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';

import { parseISO } from 'date-fns/esm';
import RentalDTO from '../../../DTOS/Rental';

import {
  Container,
  CarContainer,
  CarData,
  IconContainer,
  CarNameContainer,
  CarBrand,
  CarName,
  PriceContainer,
  PriceLabel,
  PriceText,
  CarImage,
  PeriodContainer,
  PeriodText,
  DateContainer,
  DateText,
  ArrowRight,
  EndDateContainer,
  EndDateText,
} from './styles';

interface CardProps {
  rental: RentalDTO;
}

const fuelIconStyles = {
  gas: (
    <Feather
      name="droplet"
      size={22}
      color="#AEAEB3"
      style={{ marginRight: 16 }}
    />
  ),
  eletric: (
    <SimpleLineIcons
      name="energy"
      size={22}
      color="#AEAEB3"
      style={{ marginRight: 24 }}
    />
  ),
  bio: (
    <Ionicons
      name="md-leaf-outline"
      size={24}
      color="#AEAEB3"
      style={{ marginRight: -4 }}
    />
  ),
  gear: null,
};

const Card: React.FC<CardProps> = ({ rental }) => {
  const { car, start_date, end_date } = rental;

  const startDate = parseISO(String(start_date));
  const endDate = parseISO(String(end_date));

  const rentedNow = useMemo(() => {
    return isWithinInterval(new Date(), {
      start: startOfDay(startDate),
      end: endOfDay(endDate),
    });
  }, [startDate, endDate]);

  const interval = differenceInDays(endDate, startDate);

  const formatDate = useCallback((date: Date) => {
    const dayMonthYear = format(date, 'dd MMMM yyyy', { locale: pt });
    return (
      dayMonthYear.slice(0, 3) +
      dayMonthYear.charAt(3).toUpperCase() +
      dayMonthYear.slice(4)
    );
  }, []);

  const fuelIcon = useMemo<SpecIcon>((): SpecIcon => {
    const fuelSpec = car.specs.find(spec => spec.name === 'Fuel');
    return fuelSpec ? fuelSpec.icon : undefined;
  }, [car.specs]);

  return (
    <Container>
      <CarContainer>
        <CarData>
          <CarNameContainer>
            <CarBrand>{car.brand}</CarBrand>
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
      </CarContainer>

      {rentedNow ? (
        <EndDateContainer>
          <EndDateText>{`Utilizando até ${formatDate(endDate)}`}</EndDateText>
        </EndDateContainer>
      ) : (
          <PeriodContainer>
            <PeriodText>PERIODO</PeriodText>
            <DateContainer>
              <DateText>{formatDate(startDate)}</DateText>
              <ArrowRight />
              <DateText>{formatDate(endDate)}</DateText>
            </DateContainer>
          </PeriodContainer>
        )}
    </Container>
  );
};

export default Card;

Card.propTypes = {
  rental: PropTypes.shape({
    id: PropTypes.string.isRequired,
    car: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      daily_value: PropTypes.number.isRequired,
      CarImage: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          image_url: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      specs: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          icon: PropTypes.oneOf(['gas', 'eletric', 'bio', 'gear', undefined])
            .isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};
