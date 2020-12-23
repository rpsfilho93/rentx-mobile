import styled, { css } from 'styled-components/native';
import { ViewProps, TextInputProps, TouchableOpacityProps } from 'react-native';

interface ContainerProps extends ViewProps {
  hasErrors: boolean;
  isFocused: boolean;
  isFilled?: boolean;
}

interface TextContainerProps extends TextInputProps {
  hasErrors: boolean;
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 56px;
  background: #f2f2fa;

  align-items: center;
`;

export const IconContainer = styled.View<ContainerProps>`
  height: 56px;
  width: 56px;

  align-items: center;
  justify-content: center;
  background: #f2f2fa;

  border-right-width: 2px;
  border-color: #fff;

  ${props =>
    (props.isFocused || props.isFilled) &&
    css`
      background: #5ecb57;
    `}

  ${props =>
    props.hasErrors &&
    css`
      background: #c53030;
    `}
`;

export const TextContainer = styled.TextInput<TextContainerProps>`
  flex: 1;
  height: 100%;

  padding: 16px;

  font-size: 15px;
  color: #7a7a80;
  font-family: 'Inter_400Regular';

  ${props =>
    props.isFocused &&
    css`
      border-top-width: 2px;
      border-left-width: 2px;
      border-bottom-width: 2px;

      border-color: #5ecb57;
    `}

  ${props =>
    props.hasErrors &&
    css`
      border-top-width: 2px;
      border-left-width: 2px;
      border-bottom-width: 2px;

      border-color: #c53030;
    `}
`;

export const EyeButtonContainer = styled.View<ContainerProps>`
  height: 100%;

  align-items: center;
  justify-content: center;

  padding-right: 16px;

  ${props =>
    props.isFocused &&
    css`
      border-top-width: 2px;
      border-right-width: 2px;
      border-bottom-width: 2px;

      border-color: #5ecb57;
    `}

  ${props =>
    props.hasErrors &&
    css`
      border-top-width: 2px;
      border-right-width: 2px;
      border-bottom-width: 2px;

      border-color: #c53030;
    `}
`;

export const EyeButton = styled.TouchableOpacity``;
