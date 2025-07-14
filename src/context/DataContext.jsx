 import React, { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [ondashboard, setOndashboard] = useState(false);
  const targetDate = new Date("2025-08-13T00:00:00Z"); // adjust as needed

  const [timeLeft, setTimeLeft] = useState(
    Math.floor((targetDate.getTime() - Date.now()) / 1000)
  );
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.floor((targetDate.getTime() - now) / 1000);
      setTimeLeft(diff > 0 ? diff : 0);
      if (diff <= 0) setIsCountdownComplete(true);
    };

    // Run once on load
    updateCountdown();

    // Then every minute
    const interval = setInterval(updateCountdown, 60 * 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return { days, hours, minutes };
  };

  const { days, hours, minutes } = formatTime(timeLeft);
  console.log(minutes)

  return (
    <DataContext.Provider value={{ ondashboard, setOndashboard, days, hours, minutes }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
 

