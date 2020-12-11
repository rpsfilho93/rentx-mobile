import React from 'react';

import { DateRangeProvider } from './dateRange';

const AppProvider: React.FC = ({ children }) => (
  <DateRangeProvider>{children}</DateRangeProvider>
);

export default AppProvider;
