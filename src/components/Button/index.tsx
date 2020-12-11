import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, disabled = false, ...rest }) => {
  return (
    <ButtonContainer {...rest} disabled={disabled}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
