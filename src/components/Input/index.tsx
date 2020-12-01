import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

import { Container, IconContainer, TextContainer } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
  containerStyle?: { [key: string]: string | number };
}

const Input: React.FC<InputProps> = ({ icon, containerStyle, ...rest }) => {
  return (
    <Container style={containerStyle}>
      <IconContainer>
        <Feather name={icon} size={20} color="#7A7A80" />
      </IconContainer>

      <TextContainer placeholderTextColor="#AEAEB3" {...rest} />
    </Container>
  );
};

export default Input;
