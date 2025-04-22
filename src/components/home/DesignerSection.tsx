import React from 'react';
import Button from '../common/Button';

const DesignerSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[500px] overflow-hidden rounded-md">
            <img
              src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Designer at work"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:pl-8">
            <h5 className="text-dolevian-gold uppercase tracking-wider text-sm mb-2">Our Philosophy</h5>
            <h2 className="section-title">Crafted With Passion</h2>
            <p className="text-dolevian-gray-600 mb-6">
              At Dolevian, we believe that clothing is more than just fabric—it's an expression of identity. Each piece in our collection is thoughtfully designed and meticulously crafted to bring out the best in you.
            </p>
            <p className="text-dolevian-gray-600 mb-8">
              Our team of dedicated designers draws inspiration from global trends while maintaining timeless elegance. We use only the finest materials, ensuring that each garment not only looks exceptional but feels comfortable and lasts for years to come.
            </p>
            <Button to="/about" variant="secondary">
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerSection;