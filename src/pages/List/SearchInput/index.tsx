import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, TextContainer, IconContainer } from './styles';

interface SearchInputProps {
  onPress({ name }: { name: string }): void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onPress }) => {
  const [name, setName] = useState<string>('');

  return (
    <Container>
      <TextContainer
        value={name}
        placeholder="Qual carro você procura?"
        onChangeText={text => setName(text)}
        onSubmitEditing={() => onPress({ name })}
      />
      <IconContainer onPress={() => onPress({ name })}>
        <Feather name="search" size={25} color="#47474D" />
      </IconContainer>
    </Container>
  );
};

export default SearchInput;
