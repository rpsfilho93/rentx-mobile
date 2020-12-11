import React from 'react';
import AppProvider from '../hooks';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => (
  <AppProvider>
    <AuthRoutes />
  </AppProvider>
);

export default Routes;
