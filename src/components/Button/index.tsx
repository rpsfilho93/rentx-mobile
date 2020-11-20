import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

const Button:React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
