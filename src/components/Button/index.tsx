import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  disabled = false,
  loading,
  ...rest
}) => {
  return (
    <ButtonContainer {...rest} disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </ButtonContainer>
  );
};

export default Button;
