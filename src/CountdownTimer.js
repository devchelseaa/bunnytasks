// CountdownTimer.js
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [inputTime, setInputTime] = useState('');      // For user input in minutes
  const [timeLeft, setTimeLeft] = useState(0);         // For countdown time in seconds
  const [isActive, setIsActive] = useState(false);     // To track if countdown is active
  const [hasStarted, setHasStarted] = useState(false); // Tracks if timer has been started

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [isActive, timeLeft]);

  const handleStart = () => {
    if (!hasStarted) {
      // Only set initial time on first start, or after reset
      const timeInMinutes = parseFloat(inputTime);
      if (!isNaN(timeInMinutes) && timeInMinutes > 0) {
        setTimeLeft(timeInMinutes * 60); // Set time in seconds
        setHasStarted(true);             // Mark timer as started
      }
    }
    setIsActive(true); // Activate the timer
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);  // Stop the countdown
    setHasStarted(false); // Allow timer to be reset on next Start
    setTimeLeft(0);       // Clear countdown display
    setInputTime('');     // Clear input field
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className='timer'>
      <h2>countdown timer</h2>
      <input 
        type="number" 
        value={inputTime} 
        onChange={(e) => setInputTime(e.target.value)} 
        placeholder="Enter time in minutes" 
        min="0" // Prevents negative values from being entered
        disabled={hasStarted} // Disable input after start
      />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <div>{formatTime(timeLeft)}</div>
    </div>
  );
};

export default CountdownTimer;
