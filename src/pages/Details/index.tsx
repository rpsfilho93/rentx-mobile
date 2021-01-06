import React, { useCallback, useRef, useState } from 'react';
import { View, StatusBar, ViewToken, TouchableOpacity } from 'react-native';
import { Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { format, differenceInDays } from 'date-fns';
import { pt } from 'date-fns/locale';

import { AppParamList } from '../../routes/app.routes';
import { useDateRange } from '../../hooks/dateRange';
import { CarImageDTO, SpecDTO } from '../../DTOS/Car';
import Cambio from '../../assets/Câmbio.png';
import Button from '../../components/Button';

import {
  Container,
  CarData,
  Header,
  ChevronLeft,
  PageIndicator,
  Dot,
  ImagesContainer,
  ImageCanvas,
  CarImage,
  NamePriceContainer,
  NameContainer,
  BrandText,
  NameText,
  PriceContainer,
  PriceLabel,
  PriceText,
  DateContainer,
  DateLabel,
  DateText,
  ArrowRight,
  Footer,
  FooterData,
  TotalContainer,
  TotalLabel,
  CalcText,
  TotalText,
  SpecsContainer,
  SpecContainer,
  SpecText,
  Gear,
} from './styles';
import api from '../../services/api';

type DetailsRouteProp = RouteProp<AppParamList, 'Details'>;

const icons = {
  gas: <Feather name="droplet" size={28} color="#47474D" />,
  eletric: <SimpleLineIcons name="energy" size={28} color="#47474D" />,
  bio: <Ionicons name="md-leaf-outline" size={28} color="#47474D" />,
  gear: <Gear source={Cambio} style={{ tintColor: '#47474D' }} />,
};

const Details: React.FC = () => {
  const route = useRoute<DetailsRouteProp>();

  const {
    id,
    name,
    brand,
    daily_value,
    CarImage: images,
    specs,
  } = route.params.car;

  const { goBack, navigate } = useNavigation();
  const [currentImage, setCurrentImage] = useState(0);
  const { start, end } = useDateRange();

  const interval = differenceInDays(end, start);

  const dateFormatted = useCallback((date: Date) => {
    const monthYear = format(date, 'dd MMMM yyyy', { locale: pt });
    return monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
  }, []);

  const renderCarImage = useCallback((image: CarImageDTO) => {
    return (
      <ImageCanvas>
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

  const renderSpec = useCallback((spec: SpecDTO) => {
    return (
      <SpecContainer>
        {spec.icon && icons[spec.icon]}
        <SpecText>{spec.description}</SpecText>
      </SpecContainer>
    );
  }, []);

  const handleRentNow = useCallback(async () => {
    await api.post('/rentals', {
      car_id: id,
      start_date: start,
      end_date: end,
    });

    navigate('CarRented');
  }, [id, start, end, navigate]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <CarData>
        <Header>
          <TouchableOpacity onPress={() => goBack()}>
            <ChevronLeft />
          </TouchableOpacity>
          <PageIndicator>
            {images.map((image, order) => {
              return order === currentImage ? (
                <Dot key={image.name} active />
              ) : (
                  <Dot key={image.name} />
                );
            })}
          </PageIndicator>
        </Header>

        <ImagesContainer
          data={images}
          keyExtractor={image => image.name}
          horizontal
          getItemLayout={(data, index) => ({
            length: 334,
            offset: 334 * index,
            index,
          })}
          snapToInterval={334}
          decelerationRate="normal"
          bounces={false}
          renderItem={({ item }) => renderCarImage(item)}
          onViewableItemsChanged={onViewableItemsChanged.current}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginVertical: 8, alignItems: 'center' }}
        />

        <NamePriceContainer>
          <NameContainer>
            <BrandText>{brand}</BrandText>
            <NameText>{name}</NameText>
          </NameContainer>

          <PriceContainer>
            <PriceLabel>AO DIA</PriceLabel>
            <PriceText>{`R$ ${daily_value}`}</PriceText>
          </PriceContainer>
        </NamePriceContainer>

        <SpecsContainer
          data={specs}
          keyExtractor={item => String(item.name)}
          numColumns={3}
          renderItem={({ item }) => renderSpec(item)}
          contentContainerStyle={{
            width: '100%',
            alignItems: 'center',
            height: 178,
          }}
        />

        <DateContainer>
          <View>
            <DateLabel>DE</DateLabel>
            <DateText>{dateFormatted(start)}</DateText>
          </View>

          <ArrowRight />

          <View>
            <DateLabel>ATÉ</DateLabel>
            <DateText>{dateFormatted(end)}</DateText>
          </View>
        </DateContainer>
      </CarData>
      <Footer>
        <FooterData>
          <TotalContainer>
            <TotalLabel>TOTAL</TotalLabel>
            <CalcText>
              {`R$ ${daily_value}x${interval} ${interval > 1 ? 'diárias' : 'diária'
                }`}
            </CalcText>
          </TotalContainer>
          <TotalText>{`R$ ${daily_value * interval}`}</TotalText>
        </FooterData>
        <Button text="Alugar agora" onPress={handleRentNow} />
      </Footer>
    </Container>
  );
};

export default Details;
