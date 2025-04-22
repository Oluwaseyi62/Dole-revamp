import React from 'react';
import CountdownTimer from '../common/CountdownTimer';

interface CountdownSectionProps {
  title: string;
  subtitle: string;
  description: string;
  targetDate: Date;
}

const CountdownSection: React.FC<CountdownSectionProps> = ({
  title,
  subtitle,
  description,
  targetDate,
}) => {
  const storedDate = localStorage.getItem('countdownTarget');
  const finalTargetDate = storedDate ? new Date(storedDate) : targetDate;

  if (!storedDate) {
    localStorage.setItem('countdownTarget', targetDate.toISOString());
  }

  const handleCountdownComplete = () => {
    localStorage.removeItem('countdownTarget');
    console.log('Countdown completed!');
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-10 bg-dolevian-charcoal/80"></div>
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/Dole1.jpg')" }}
      ></div>
      <div className="relative z-20 text-center text-white container-custom">
        <div className="max-w-3xl mx-auto">
          <h5 className="mb-2 text-sm tracking-wider uppercase text-dolevian-gold">{subtitle}</h5>
          <h2 className="section-title">{title}</h2>
          <p className="mb-10 text-dolevian-gray-300">{description}</p>

          <CountdownTimer 
            targetDate={finalTargetDate} 
            onComplete={handleCountdownComplete} 
          />
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;