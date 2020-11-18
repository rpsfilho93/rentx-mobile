import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;

  padding: 96px 32px 0px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;
`;

export const Numeral = styled.Text`
  font-size: 56px;
  font-family: 'Archivo_700Bold';
  color: #EBEBF0;
`;

export const TitleContainer = styled.View`
  width: 100%;
  margin-bottom: 96px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-family: 'Archivo_700Bold';
  color: #47474D;
  width: 200px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  font-family: 'Inter_400Regular';
  color: #7A7A80;
  width: 200px;
  line-height: 25px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PageIndicator = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ActiveSquare = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: #47474D;
`;

export const InactiveSquare = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  margin-right: 8px;
  background-color: #AEAEB3;
`;

export const NextPageButton = styled.TouchableOpacity``;
