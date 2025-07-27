import { useEffect, useState } from "react";

const FIVE_MINUTES = 2 * 60 * 1000;

const useTaskTimer =(taskKey)=> {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const startTime = localStorage.getItem(taskKey);
    if (startTime) {
      setLoading(true);
    }

    const interval = setInterval(() => {
      const saved = parseInt(localStorage.getItem(taskKey) || "0", 10);
      const now = Date.now();

      if (saved && now - saved >= FIVE_MINUTES) {
        setLoading(false);
        setCheck(true);
        localStorage.removeItem(taskKey);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [taskKey]);

  const startTimer = () => {
    const now = Date.now();
    localStorage.setItem(taskKey, now.toString());
    setLoading(true);
  };

  return { loading, check, startTimer };
}
export default  useTaskTimer