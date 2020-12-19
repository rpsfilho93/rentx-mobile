import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0px 24px 80px;
  justify-content: flex-end;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 36px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-family: 'Archivo_600SemiBold';
  color: #3d3d4d;
  width: 200px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  font-family: 'Inter_400Regular';
  color: #7a7a80;
  width: 230px;
  line-height: 25px;

  margin-bottom: 64px;
`;

export const RememberContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  margin: 24px 0px;
`;

export const SmallText = styled.Text`
  font-size: 13px;
  font-family: 'Inter_400Regular';
  color: #737380;
`;
