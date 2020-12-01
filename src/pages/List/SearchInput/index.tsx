import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, TextContainer, IconContainer } from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <TextContainer placeholder="Qual carro você procura?" />
      <IconContainer>
        <Feather name="search" size={25} color="#47474D" />
      </IconContainer>
    </Container>
  );
};

export default SearchInput;
