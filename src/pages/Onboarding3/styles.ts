import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1B1B1F;
  align-items: center;

  padding: 0 24px;
`;

export const Logo = styled.Image`
  margin-top: 88px;
`;

export const Title = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 40px;
  color: #F4F5F6;
  text-align: center;
  margin-top: 104px;
`;

export const SubTitle = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 15px;
  color: #DEDDE3;

  margin-top: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 112px;
  width: 100%;

  justify-content: center;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 56px;
  width: 156px;
  background: #DC1637;

  align-items: center;
  justify-content: center;

  margin-right: 16px;
`;

export const SignUpButton = styled.TouchableOpacity`
  height: 56px;
  width: 156px;
  background: #29292E;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  color: #E1E1E6;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const GoBackButtonText = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 13px;
  color: #7A7A80;
`;
