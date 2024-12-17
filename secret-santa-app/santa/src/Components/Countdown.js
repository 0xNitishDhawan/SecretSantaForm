import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // Assuming you add the CSS for styling

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [targetDate]);

  function getTimeLeft(targetDate) {
    const now = new Date();
    const timeDifference = new Date(targetDate) - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="countdown-container">
      <span className="countdown-header">Register Before: </span>
      <span className="countdown-timer">
        <span className="countdown-item">{timeLeft.days}d</span>
        <span className="countdown-item">{timeLeft.hours}h</span>
        <span className="countdown-item">{timeLeft.minutes}m</span>
        <span className="countdown-item">{timeLeft.seconds}s</span>
      </span>
    </div>
  );
};

export default CountdownTimer;
