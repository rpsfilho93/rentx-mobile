import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0px 24px 80px;
  justify-content: flex-end;
`;

export const Header = styled.View`
  position: absolute;
  left: 20px;
  top: 36px;

  flex-direction: row;
  width: 100%;

  align-items: center;
  justify-content: space-between;
`;

export const GoBackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 40px;
  font-family: 'Archivo_600SemiBold';
  color: #3D3D4D;
  width: 200px;
  margin-bottom: 16px ;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  font-family: 'Inter_400Regular';
  color: #7A7A80;
  width: 180px;
  line-height: 25px;

  margin-bottom: 64px;
`;

export const FormTitle = styled.Text`
  font-size: 20px;
  font-family: 'Archivo_600SemiBold';
  color: #3D3D4D;
  margin-bottom: 8px;
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
  margin-right: 8px;
`;

export const InactiveSquare = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: #AEAEB3;
`;
