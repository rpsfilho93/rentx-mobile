import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { ViewToken, TouchableOpacityProps } from 'react-native';
import CarDTO, { CarImageDTO } from '../../../DTOS/Car';

import {
  Container,
  Header,
  NameContainer,
  BrandText,
  NameText,
  PriceContainer,
  PriceLabel,
  PriceText,
  ImagesContainer,
  ImageCanvas,
  CarImage,
  Footer,
  PageIndicator,
  Dot,
} from './styles';

interface CardProps extends TouchableOpacityProps {
  car: CarDTO;
}

const fuelIconStyles = {
  gas: <Feather name="droplet" size={25} color="#AEAEB3" />,
  eletric: <SimpleLineIcons name="energy" size={25} color="#AEAEB3" />,
  bio: <Ionicons name="md-leaf-outline" size={25} color="#AEAEB3" />,
};

const Card: React.FC<CardProps> = ({ car, ...rest }) => {
  const { navigate } = useNavigation();

  const fuelIcon = useMemo<string>(() => {
    const fuelSpec = car.specs.find(spec => spec.name === 'Fuel');

    return fuelSpec ? fuelSpec.icon : '';
  }, [car.specs]);

  const [currentImage, setCurrentImage] = useState(0);
  const { name, brand, daily_value, CarImage: images } = car;

  const renderCarImage = useCallback((image: CarImageDTO) => {
    return (
      <ImageCanvas onPress={() => navigate('Details', { car })}>
        <CarImage source={{ uri: image.image_url }} />
      </ImageCanvas>
    );
  }, []);

  const onViewableItemsChanged = useRef(
    ({
      changed,
      viewableItems,
    }: {
      changed: ViewToken[];
      viewableItems: ViewToken[];
    }) => {
      setCurrentImage(viewableItems[viewableItems.length - 1].index || 0);
    },
  );

  return (
    <Container {...rest}>
      <Header>
        <NameContainer>
          <BrandText>{brand}</BrandText>
          <NameText>{name}</NameText>
        </NameContainer>

        <PriceContainer>
          <PriceLabel>AO DIA</PriceLabel>
          <PriceText>{`R$ ${daily_value}`}</PriceText>
        </PriceContainer>
      </Header>

      <ImagesContainer
        data={images}
        keyExtractor={image => image.name}
        horizontal
        getItemLayout={(data, index) => ({
          length: 290,
          offset: 290 * index,
          index,
        })}
        snapToInterval={290}
        decelerationRate="normal"
        bounces={false}
        renderItem={({ item }) => renderCarImage(item)}
        onViewableItemsChanged={onViewableItemsChanged.current}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginVertical: 8, alignItems: 'center' }}
      />

      <Footer>
        {fuelIcon ? fuelIconStyles[fuelIcon] : fuelIconStyles.gas}
        <PageIndicator>
          {images.map((image, order) => {
            return order === currentImage ? (
              <Dot key={image.name} active />
            ) : (
                <Dot key={image.name} />
              );
          })}
        </PageIndicator>
      </Footer>
    </Container>
  );
};

export default Card;
