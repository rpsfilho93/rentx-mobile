import React, { useCallback, useState } from 'react';
import { Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { CameraButton, CameraIcon } from './styles';

const ImagePickerButton: React.FC = () => {
  const [permission, setPermission] = useState(false);
  const { user, updateUser } = useAuth();

  const pickImage = useCallback(async () => {
    if (!permission) {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        status !== 'granted'
          ? Alert.alert('Desculpe, nós precisamos das permissões de câmera!')
          : setPermission(true);
      }
    }

    const result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync(
      {
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      },
    );

    if (!result.cancelled) {
      const data = new FormData();

      data.append('avatar', {
        type: 'image/jpeg',
        name: `${user.id}.jpg`,
        uri: result.uri,
      });

      api.patch('avatar', data).then(response => {
        updateUser(response.data);
      });
    }
  }, [permission, updateUser, user.id]);

  return (
    <CameraButton onPress={pickImage}>
      <CameraIcon />
    </CameraButton>
  );
};

export default ImagePickerButton;
