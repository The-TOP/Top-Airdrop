import { useState, useEffect, useContext } from "react";
import DataContext from "../context/DataContext";

const useCountdown = (targetDate: Date) => {
  const { setIsCountdownComplete } = useContext(DataContext);
  const [timeLeft, setTimeLeft] = useState(
    Math.floor((targetDate.getTime() - Date.now()) / 1000)
  );

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.floor((targetDate.getTime() - now) / 1000);
      setTimeLeft(diff > 0 ? diff : 0);
      if (diff <= 0) setIsCountdownComplete(true);
    };

    // Run once on load
    updateCountdown();

    // Then every second
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  return formatTime(timeLeft);
};

export default useCountdown;
