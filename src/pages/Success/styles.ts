import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #1b1b1f;

  padding-top: 48px;

  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: 'Archivo_600SemiBold';
  color: #e1e1e6;
  margin: 24px 0px 8px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  font-family: 'Inter_400Regular';
  color: #a8a8b3;
  text-align: center;
  max-width: 200px;
  line-height: 25px;

  margin-bottom: 56px;
`;

export const OkButton = styled.TouchableOpacity`
  height: 56px;
  width: 80px;

  background: #29292e;

  align-items: center;
  justify-content: center;
`;

export const OkButtonText = styled.Text`
  font-size: 15px;
  font-family: 'Inter_500Medium';
  color: #fff;
`;
