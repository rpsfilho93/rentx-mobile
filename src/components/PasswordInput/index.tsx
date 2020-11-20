import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

import { Container, IconContainer, TextContainer, EyeButton } from './styles';

interface InputProps extends TextInputProps {
  containerStyle?: { [key: string]: string | number};
}

const PasswordInput:React.FC<InputProps> = ({ containerStyle, ...rest }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Container style={containerStyle}>
      <IconContainer>
        <Feather name='lock' size={20} color='#7A7A80'/>
      </IconContainer>

      <TextContainer secureTextEntry={!visible} placeholderTextColor='#AEAEB3' {...rest}/>

      <EyeButton onPress={() => setVisible(!visible)}>
        <Feather name={visible ? 'eye-off' : 'eye'} size={20} color='#AEAEB3' />
      </EyeButton>
    </Container>
  );
};

export default PasswordInput;
