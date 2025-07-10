import React, { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [ondashboard, setOndashboard] = useState(false);

  return (
    <DataContext.Provider value={{ ondashboard, setOndashboard }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
