import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TextProps } from 'react-native';

interface TabProps extends TextProps {
  selected: boolean;
}

export const Container = styled.View`
  justify-content: flex-end;
  height: 100%;
  padding-bottom: 13%;
`;

export const Header = styled.View`
  height: 28%;
  justify-content: flex-start;
  background: #1b1b1f;

  padding: 36px 16px 0px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  font-size: 25px;
  font-family: 'Archivo_600SemiBold';
  color: #fff;
`;

export const Content = styled.View`
  align-items: center;
  padding: 0px 24px;
  width: 100%;
`;

export const AvatarContainer = styled.View``;

export const Avatar = styled.Image`
  margin-top: -80px;
  width: 160px;
  height: 160px;
  border-radius: 80px;
  margin-bottom: 4px;
`;

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

export const TabContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 56px;

  border-bottom-width: 1px;
  border-bottom-color: #ebebf0;

  padding: 16px 48px;

  margin-bottom: 24px;
`;

export const Tab = styled.Text<TabProps>`
  text-align: center;
  height: 56px;
  padding: 10px 0px;
  font-size: 20px;
  font-family: 'Archivo_600SemiBold';
  color: ${props => (props.selected ? '#3D3D4D' : '#AEAEB3')};
  border-bottom-width: ${props => (props.selected ? '2px' : '0px')};
  border-bottom-color: #dc1637;
`;
