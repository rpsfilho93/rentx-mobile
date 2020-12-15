import React from 'react';
import { AuthProvider } from './auth';

import { DateRangeProvider } from './dateRange';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <DateRangeProvider>{children}</DateRangeProvider>
  </AuthProvider>
);

export default AppProvider;
