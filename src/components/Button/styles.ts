import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  height: 56px;
  background: #dc1637;
  width: 100%;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-family: 'Inter_500Medium';
  color: #fff;
`;
