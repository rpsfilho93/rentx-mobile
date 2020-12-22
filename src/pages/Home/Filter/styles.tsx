import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  height: 88%;
  width: 100%;

  padding: 24px 24px;
  position: absolute;
  bottom: 0;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: #ebebf0;

  padding-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 25px;

  color: #47474d;
`;

export const Clean = styled.TouchableOpacity``;

export const CleanText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;

  color: #aeaeb3;
`;

export const FilterContainer = styled.View`
  margin-top: 24px;
`;

export const PriceHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FilterName = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 20px;

  color: #47474d;
`;

export const PriceText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;

  color: #dc1637;
`;

export const FuelContainer = styled.View`
  flex-direction: row;
  width: 100%;
  aspect-ratio: 3.2;
  border-color: #f4f5f6;
  border-width: 4px;

  margin-top: 16px;
`;

export const FuelButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0px;
  background: #f4f5f6;
`;

export const Name = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;

  color: #aeaeb3;
`;

export const TransmissionContainer = styled.View`
  flex-direction: row;
  width: 100%;
  aspect-ratio: 4.7;
  border-color: #f4f5f6;
  border-width: 4px;

  margin-top: 16px;
`;

export const TransmissionButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #f4f5f6;
`;
