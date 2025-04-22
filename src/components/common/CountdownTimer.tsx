import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate,
  onComplete
}) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isComplete && Object.values(timeLeft).every(value => value === 0)) {
      setIsComplete(true);
      onComplete?.();
    }

    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isComplete, onComplete]);

  return (
    <div className="w-full">
      <div className="flex justify-center space-x-3 md:space-x-4">
        <div className="countdown-unit bg-white">
          <span className="countdown-number text-dolevian-charcoal">{timeLeft.days}</span>
          <span className="countdown-label text-dolevian-gray-600">Days</span>
        </div>
        <div className="countdown-unit bg-white">
          <span className="countdown-number text-dolevian-charcoal">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="countdown-label text-dolevian-gray-600">Hours</span>
        </div>
        <div className="countdown-unit bg-white">
          <span className="countdown-number text-dolevian-charcoal">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="countdown-label text-dolevian-gray-600">Minutes</span>
        </div>
        <div className="countdown-unit bg-white">
          <span className="countdown-number text-dolevian-charcoal">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="countdown-label text-dolevian-gray-600">Seconds</span>
        </div>
      </div>
      {isComplete && (
        <div className="mt-6 text-white text-lg font-medium">
          The countdown has ended!
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;