import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ContainerButton, InnerSquare } from './styles';

interface RememberButtonProps extends TouchableOpacityProps {
  value: boolean;
}

const RememberButton: React.FC<RememberButtonProps> = ({ value, ...rest }) => {
  return (
    <ContainerButton
      {...rest}
      style={{ backgroundColor: value ? '#1B1B1F' : '#EBEBF0' }}
    >
      {value ? <InnerSquare /> : null}
    </ContainerButton>
  );
};

export default RememberButton;
