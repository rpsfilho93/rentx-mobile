import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import RangeSlider from 'rn-range-slider';
import { Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import Button from '../../../components/Button';

import {
  Container,
  Header,
  Title,
  Clean,
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
  onSubmit(state: FilterState): void;
}

const Filter: React.FC<FilterProps> = ({ onSubmit }) => {
  const [fuel, setFuel] = useState<'Gasolina' | 'Elétrico' | 'Álcool'>(
    'Gasolina',
  );
  const [transmission, setTransmission] = useState<'Manual' | 'Automático'>(
    'Automático',
  );
  const [startPrice, setStartPrice] = useState<number>(200);
  const [endPrice, setEndPrice] = useState<number>(500);

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
    <Container>
      <Header>
        <Title>Filtro</Title>
        <Clean>Limpar todos</Clean>
      </Header>
      <FilterContainer>
        <PriceHeader>
          <FilterName>Preço ao dia</FilterName>
          <PriceText>{`R$${startPrice}-R$${endPrice}`}</PriceText>
        </PriceHeader>
        <RangeSlider
          style={{ width: 240, height: 24, alignSelf: 'center', marginTop: 16 }}
          gravity="center"
          min={50}
          max={500}
          low={startPrice}
          high={endPrice}
          step={10}
          onValueChanged={(low, high, fromUser) => {
            setStartPrice(low);
            setEndPrice(high);
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
            onPress={() => setFuel('Gasolina')}
            style={fuel === 'Gasolina' && { backgroundColor: '#fff' }}
          >
            <Feather
              name="droplet"
              size={28}
              color={fuel === 'Gasolina' ? '#dc1637' : '#AEAEB3'}
            />
            <Name style={fuel === 'Gasolina' && { color: '#47474D' }}>
              Gasolina
            </Name>
          </FuelButton>

          <FuelButton
            onPress={() => setFuel('Elétrico')}
            style={fuel === 'Elétrico' && { backgroundColor: '#fff' }}
          >
            <SimpleLineIcons
              name="energy"
              size={28}
              color={fuel === 'Elétrico' ? '#dc1637' : '#AEAEB3'}
            />
            <Name style={fuel === 'Elétrico' && { color: '#47474D' }}>
              Elétrico
            </Name>
          </FuelButton>

          <FuelButton
            onPress={() => setFuel('Álcool')}
            style={fuel === 'Álcool' && { backgroundColor: '#fff' }}
          >
            <Ionicons
              name="md-leaf-outline"
              size={28}
              color={fuel === 'Álcool' ? '#dc1637' : '#AEAEB3'}
            />
            <Name style={fuel === 'Álcool' && { color: '#47474D' }}>
              Álcool
            </Name>
          </FuelButton>
        </FuelContainer>
      </FilterContainer>

      <FilterContainer>
        <FilterName>Transmissão</FilterName>
        <TransmissionContainer>
          <TransmissionButton
            onPress={() => setTransmission('Automático')}
            style={transmission === 'Automático' && { backgroundColor: '#fff' }}
          >
            <Name style={transmission === 'Automático' && { color: '#47474D' }}>
              Automático
            </Name>
          </TransmissionButton>
          <TransmissionButton
            onPress={() => setTransmission('Manual')}
            style={transmission === 'Manual' && { backgroundColor: '#fff' }}
          >
            <Name style={transmission === 'Manual' && { color: '#47474D' }}>
              Manual
            </Name>
          </TransmissionButton>
        </TransmissionContainer>
      </FilterContainer>
      <Button
        onPress={() => onSubmit({ fuel, transmission, startPrice, endPrice })}
        text="Confirmar"
        style={{ marginTop: 24 }}
      />
    </Container>
  );
};

export default Filter;
