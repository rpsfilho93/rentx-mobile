import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Animated, Dimensions, PanResponder } from 'react-native';
import RangeSlider from 'rn-range-slider';
import { Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';

import Button from '../../../components/Button';

import {
  Container,
  Header,
  DraggableIcon,
  Title,
  Clean,
  CleanText,
  FilterContainer,
  PriceHeader,
  FilterName,
  PriceText,
  FuelContainer,
  FuelButton,
  Name,
  TransmissionContainer,
  TransmissionButton,
} from './styles';

export interface FilterState {
  fuel: 'Gasolina' | 'Elétrico' | 'Álcool';
  transmission: 'Manual' | 'Automático';
  startPrice: number;
  endPrice: number;
}

interface FilterProps {
  fuel: 'Gasolina' | 'Elétrico' | 'Álcool';
  transmission: 'Manual' | 'Automático';
  startPrice: number;
  endPrice: number;
  visible: boolean;
  onSubmit(state: FilterState): void;
  noFilter(): void;
  goBack(): void;
}

const Filter: React.FC<FilterProps> = ({
  visible,
  startPrice,
  endPrice,
  fuel,
  transmission,
  onSubmit,
  noFilter,
  goBack,
}) => {
  const [fuelFilter, setFuelFilter] = useState<
    'Gasolina' | 'Elétrico' | 'Álcool'
  >(fuel);

  const [transmissionFilter, setTransmissionFilter] = useState<
    'Manual' | 'Automático'
  >(transmission);
  const [startPriceFilter, setStartPriceFilter] = useState<number>(startPrice);
  const [endPriceFilter, setEndPriceFilter] = useState<number>(endPrice);

  const { height, width } = Dimensions.get('window');

  const filterHeight = useMemo(() => new Animated.Value(height), [height]);

  const hideFilter = Animated.timing(filterHeight, {
    useNativeDriver: false,
    toValue: height,
    duration: 300,
  });

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (e, gestureState) => {
          if (gestureState.dy > 0) {
            return true;
          }

          return false;
        },
        onPanResponderRelease: () => {
          Animated.timing(filterHeight, {
            useNativeDriver: false,
            toValue: height,
            duration: 300,
          }).start(goBack);
        },
      }),
    [height, filterHeight, goBack],
  );

  useEffect(() => {
    if (visible) {
      Animated.timing(filterHeight, {
        useNativeDriver: false,
        toValue: 80,
        duration: 300,
      }).start();
    } else {
      hideFilter.start();
    }
  }, [visible, filterHeight, height, hideFilter]);

  const renderThumb = useCallback(
    () => (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 32,
          height: 24,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        }}
      >
        <View
          style={{
            width: 8,
            height: 8,
            borderColor: '#A0A0B3',
            borderRightWidth: 2,
            borderLeftWidth: 2,
          }}
        />
      </View>
    ),
    [],
  );

  const renderRail = useCallback(
    () => <View style={{ flex: 1, borderColor: '#f4f5f6', borderWidth: 1 }} />,
    [],
  );
  const renderRailSelected = useCallback(
    () => <View style={{ flex: 1, borderColor: '#dc1637', borderWidth: 1 }} />,
    [],
  );

  return (
    <Container
      style={{
        top: filterHeight,
      }}
    >
      <Header {...panResponder.panHandlers}>
        <DraggableIcon style={{ left: width / 2 - 48 }} />
        <Title>Filtro</Title>
        <Clean
          onPress={() => {
            hideFilter.start();
            noFilter();
          }}
        >
          <CleanText>Limpar todos</CleanText>
        </Clean>
      </Header>
      <FilterContainer>
        <PriceHeader>
          <FilterName>Preço ao dia</FilterName>
          <PriceText>{`R$${startPriceFilter}-R$${endPriceFilter}`}</PriceText>
        </PriceHeader>
        <RangeSlider
          style={{ width: 340, height: 24, alignSelf: 'center', marginTop: 16 }}
          gravity="center"
          min={50}
          max={500}
          low={startPriceFilter}
          high={endPriceFilter}
          step={10}
          onValueChanged={(low, high, fromUser) => {
            setStartPriceFilter(low);
            setEndPriceFilter(high);
          }}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
        />
      </FilterContainer>
      <FilterContainer>
        <FilterName>Combustível</FilterName>
        <FuelContainer>
          <FuelButton
            onPress={() => setFuelFilter('Gasolina')}
            style={fuelFilter === 'Gasolina' && { backgroundColor: '#fff' }}
          >
            <Feather
              name="droplet"
              size={28}
              color={fuelFilter === 'Gasolina' ? '#dc1637' : '#AEAEB3'}
            />
            <Name style={fuelFilter === 'Gasolina' && { color: '#47474D' }}>
              Gasolina
            </Name>
          </FuelButton>

          <FuelButton
            onPress={() => setFuelFilter('Elétrico')}
            style={fuelFilter === 'Elétrico' && { backgroundColor: '#fff' }}
          >
            <SimpleLineIcons
              name="energy"
              size={28}
              color={fuelFilter === 'Elétrico' ? '#dc1637' : '#AEAEB3'}
            />
            <Name style={fuelFilter === 'Elétrico' && { color: '#47474D' }}>
              Elétrico
            </Name>
          </FuelButton>

          <FuelButton
            onPress={() => setFuelFilter('Álcool')}
            style={fuelFilter === 'Álcool' && { backgroundColor: '#fff' }}
          >
            <Ionicons
              name="md-leaf-outline"
              size={28}
              color={fuelFilter === 'Álcool' ? '#dc1637' : '#AEAEB3'}
            />
            <Name style={fuelFilter === 'Álcool' && { color: '#47474D' }}>
              Álcool
            </Name>
          </FuelButton>
        </FuelContainer>
      </FilterContainer>

      <FilterContainer>
        <FilterName>Transmissão</FilterName>
        <TransmissionContainer>
          <TransmissionButton
            onPress={() => setTransmissionFilter('Automático')}
            style={
              transmissionFilter === 'Automático' && { backgroundColor: '#fff' }
            }
          >
            <Name
              style={
                transmissionFilter === 'Automático' && { color: '#47474D' }
              }
            >
              Automático
            </Name>
          </TransmissionButton>
          <TransmissionButton
            onPress={() => setTransmissionFilter('Manual')}
            style={
              transmissionFilter === 'Manual' && { backgroundColor: '#fff' }
            }
          >
            <Name
              style={transmissionFilter === 'Manual' && { color: '#47474D' }}
            >
              Manual
            </Name>
          </TransmissionButton>
        </TransmissionContainer>
      </FilterContainer>
      <Button
        onPress={() => {
          hideFilter.start();

          onSubmit({
            fuel: fuelFilter,
            transmission: transmissionFilter,
            startPrice: startPriceFilter,
            endPrice: endPriceFilter,
          });
        }}
        text="Confirmar"
        style={{ marginTop: 24 }}
      />
    </Container>
  );
};

export default Filter;
