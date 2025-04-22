import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-10 bg-dolevian-charcoal/30"></div>
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url('/images/Dole4.jpg')` }}
      ></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white container-custom">
        <img src="/images/dolevian-logo.png" alt="Dolevian" className="w-64 mb-6 animate-slide-down" />
        <p className="max-w-xl mx-auto mb-8 text-lg md:text-xl animate-slide-down" style={{ animationDelay: '0.2s' }}>
          Dare to be you. Express your unique style with our premium streetwear collection.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row animate-slide-down" style={{ animationDelay: '0.4s' }}>
          <Button
            to="/shop"
            className="text-black bg-white hover:bg-dolevian-gold hover:text-white"
          >
            Shop Collection
          </Button>
          <Button
            to="/about"
            variant="secondary"
            className="text-white bg-transparent border-white hover:bg-white hover:text-dolevian-charcoal"
          >
            Our Story <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;