import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  background: #f2f2fa;

  margin-top: -28px;
  margin-bottom: 16px;
`;

export const TextContainer = styled.TextInput`
  flex: 1;
  height: 56px;
  padding: 16px;

  font-size: 15px;
  font-family: 'Inter_400Regular';
  color: #7a7a80;
`;

export const IconContainer = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background: #f4f5f6;

  align-items: center;
  justify-content: center;

  border-left-width: 2px;
  border-color: #fff;
`;
