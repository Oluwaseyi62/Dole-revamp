import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CountdownSection from '../components/home/CountdownSection';
import DesignerSection from '../components/home/DesignerSection';
import Testimonials from '../components/home/Testimonials';
import { products } from '../utils/data';

const Home: React.FC = () => {
  // Calculate a date 30 days from now only if no target date is stored
  const storedDate = localStorage.getItem('countdownTarget');
  const targetDate = storedDate 
    ? new Date(storedDate)
    : (() => {
        const date = new Date();
        date.setDate(date.getDate() + 30);
        return date;
      })();

  useEffect(() => {   
    document.title = 'Dolevian | Premium Clothing Brand';
  }, []);

  return (
    <div>
      <Hero />

      <FeaturedProducts products={products} />

      <CountdownSection
        title="Dolevian Collections Lauching soon"
        subtitle="Coming Soon"
        description="Our collection is almost here. Be among the first to discover our latest designs, crafted for the modern individual who appreciates quality and style."
        targetDate={targetDate}
       
      />

      <DesignerSection />

      <Testimonials />
    </div>
  );
};

export default Home;