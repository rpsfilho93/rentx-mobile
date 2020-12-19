import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, IconContainer, TextContainer } from './styles';

interface InputRef {
  focus(): void;
}

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  containerStyle?: { [key: string]: string | number };
}

interface InputValueReference {
  value: string;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, containerStyle, ...rest },
  ref,
) => {
  const { registerField, fieldName, defaultValue = '', error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const inputElementRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container style={containerStyle}>
      <IconContainer>
        <Feather name={icon} size={20} color="#7A7A80" />
      </IconContainer>

      <TextContainer
        ref={inputElementRef}
        placeholderTextColor="#AEAEB3"
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
