import React, { useState } from 'react';

import { ContainerButton, InnerSquare } from './styles';

const RememberButton:React.FC = () => {
  const [remember, setRemember] = useState(false);

  return (
    <ContainerButton onPress={() => setRemember(!remember)} style={{ backgroundColor: remember ? '#1B1B1F' : '#EBEBF0' }}>
      {remember ? <InnerSquare /> : null}
    </ContainerButton>
  );
};

export default RememberButton;
