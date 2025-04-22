import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Dolevian's attention to detail is unmatched. Their pieces have become staples in my wardrobe, offering both comfort and sophistication for any occasion.",
    author: "Emma Thompson",
    position: "Fashion Stylist"
  },
  {
    id: 2,
    quote: "I've never found clothing that fits so perfectly. The quality speaks for itself, and I constantly receive compliments whenever I wear Dolevian.",
    author: "Michael Chen",
    position: "Creative Director"
  },
  {
    id: 3,
    quote: "The craftsmanship and thoughtful design of Dolevian's collection is truly impressive. These are investments that will last for years to come.",
    author: "Sophia Rodriguez",
    position: "Lifestyle Blogger"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="h-12 w-12 text-dolevian-gold/30 mx-auto mb-6" />
          
          <div className="relative min-h-[160px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute w-full transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ pointerEvents: index === currentIndex ? 'auto' : 'none' }}
              >
                <p className="text-lg md:text-xl font-serif italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-dolevian-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full border border-dolevian-gray-200 hover:bg-dolevian-cream transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full border border-dolevian-gray-200 hover:bg-dolevian-cream transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;