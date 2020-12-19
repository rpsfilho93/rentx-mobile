import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1b1b1f;
  align-items: center;

  padding: 48px 24px;
`;

export const Logo = styled.Image`
  margin-top: 88px;
`;

export const Title = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 30px;
  color: #f4f5f6;
  text-align: center;
  margin-top: 30px;
`;

export const SubTitle = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 15px;
  color: #a8a8b3;
  text-align: center;
  margin-top: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 56px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 56px;
  width: 156px;
  background: #dc1637;

  align-items: center;
  justify-content: center;

  margin-right: 16px;
`;

export const SignUpButton = styled.TouchableOpacity`
  height: 56px;
  width: 156px;
  background: #29292e;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  color: #e1e1e6;
`;
