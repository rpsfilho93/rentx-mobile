import React, { createContext, useCallback, useState, useContext } from 'react';

interface DateRangeState {
  start: Date;
  end: Date;
}

interface DataRangeContextData {
  start: Date;
  end: Date;
  setDateRange(range: DateRangeState): void;
  getDateRange(): DateRangeState;
}

const DateRangeContext = createContext<DataRangeContextData>(
  {} as DataRangeContextData,
);

export const DateRangeProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<DateRangeState>(() => {
    return {} as DateRangeState;
  });

  const setDateRange = useCallback((range: DateRangeState) => {
    setData(range);
  }, []);

  const getDateRange = useCallback(() => {
    return data;
  }, [data]);

  return (
    <DateRangeContext.Provider
      value={{ start: data.start, end: data.end, setDateRange, getDateRange }}
    >
      {children}
    </DateRangeContext.Provider>
  );
};

export const useDateRange = (): DataRangeContextData => {
  const context = useContext(DateRangeContext);

  if (!context) {
    throw new Error('useDateRange must be used within an DateRangeProvider');
  }

  return context;
};
