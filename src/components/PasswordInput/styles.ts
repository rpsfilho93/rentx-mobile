import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 56px;
  background: #F2F2FA;

  align-items: center;
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 56px;

  align-items: center;
  justify-content: center;
  background: #F2F2FA;

  border-right-width: 2px;
  border-color: #fff;
`;

export const TextContainer = styled.TextInput`
  flex: 1;
  height: 56px;
  padding: 16px;

  font-size: 15px;
  color: #7A7A80;
  font-family: 'Inter_400Regular';
`;

export const EyeButton = styled.TouchableOpacity`
  padding: 16px;
`;
