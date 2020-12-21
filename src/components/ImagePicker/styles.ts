import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const CameraButton = styled.TouchableOpacity`
  width: 42px;
  height: 42px;

  background: #dc1637;

  align-items: center;
  justify-content: center;

  position: absolute;
  right: 4px;
  bottom: 8px;
`;

export const CameraIcon = styled(Feather).attrs({
  name: 'camera',
  size: 20,
  color: '#fff',
})``;
