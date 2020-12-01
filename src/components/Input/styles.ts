import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 56px;
  background: #f2f2fa;
`;

export const IconContainer = styled.View`
  width: 56px;

  align-items: center;
  justify-content: center;
  background: #f2f2fa;

  border-right-width: 2px;
  border-color: #fff;
`;

export const TextContainer = styled.TextInput`
  flex: 1;
  height: 56px;
  padding: 16px;

  font-size: 15px;
  font-family: 'Inter_400Regular';
  color: #7a7a80;
`;
