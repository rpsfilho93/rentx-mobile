import styled, { css } from 'styled-components/native';
import { ViewProps, TextInputProps } from 'react-native';

interface ContainerProps extends ViewProps {
  hasErrors: boolean;
  isFocused: boolean;
  isFilled?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 56px;
  background: #f2f2fa;
  border-width: 0;
`;

export const IconContainer = styled.View<ContainerProps>`
  width: 56px;

  align-items: center;
  justify-content: center;

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

export const ContentContainer = styled.View<ContainerProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      border-width: 2px;
      border-color: #5ecb57;
    `}

  ${props =>
    props.hasErrors &&
    css`
      border-width: 2px;
      border-color: #c53030;
    `}
`;

export const TextContainer = styled.TextInput`
  height: 56px;
  width: 100%;
  padding-left: 16px;

  font-size: 15px;
  font-family: 'Inter_400Regular';
  color: #7a7a80;
`;
