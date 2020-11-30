import React from 'react';

import {
  Container,
  Header,
  NameContainer,
  BrandText,
  NameText,
  PriceContainer,
  PriceLabel,
  PriceText,
  ProductImage,
  FuelIcon,
  Footer,
  PageIndicator,
  Dot,
} from './styles';

interface CarProps {
  brand: string;
  name: string;
  price: number;
  image: string;
}

const Card: React.FC<CarProps> = ({ brand, image, name, price }) => {
  return (
    <Container>
      <Header>
        <NameContainer>
          <BrandText>{brand.toUpperCase()}</BrandText>
          <NameText>{name}</NameText>
        </NameContainer>

        <PriceContainer>
          <PriceLabel>AO DIA</PriceLabel>
          <PriceText>
            R$
            {price}
          </PriceText>
        </PriceContainer>
      </Header>

      <ProductImage source={image} />

      <Footer>
        <FuelIcon />
        <PageIndicator>
          <Dot active />
          <Dot />
          <Dot />
          <Dot />
        </PageIndicator>
      </Footer>
    </Container>
  );
};

export default Card;
