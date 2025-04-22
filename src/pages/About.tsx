import React, { useEffect } from 'react';
import { Clock, Heart, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About | Dolevian';
  }, []);

  return (
    <div className="pt-24">
      <section className="py-12 bg-dolevian-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h5 className="mb-2 text-sm tracking-wider uppercase text-dolevian-gold">Our Story</h5>
            <h1 className="section-title">About Dolevian</h1>
            <p className="text-dolevian-gray-600">
              Crafting premium clothing with passion and purpose since 2024.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid items-center grid-cols-1 gap-10 mb-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-3xl">Our Journey</h2>
              <p className="mb-4 text-dolevian-gray-600">
                Dolevian was founded in 2024 by designer Lawrence Dolevian with a simple mission: to create clothing that combines timeless elegance with modern sensibility. What began as a small collection of handcrafted pieces has evolved into a renowned brand celebrated for its commitment to quality and attention to detail.
              </p>
              <p className="text-dolevian-gray-600">
                Our journey has been defined by a relentless pursuit of excellence, from sourcing the finest materials to perfecting each stitch. We believe that exceptional clothing should not only look beautiful but should also feel comfortable and last for years to come.
              </p>
            </div>
            <div className="relative h-[400px] rounded-md overflow-hidden">
              <img
                src="./images/Dole4.jpg"
                alt="Dolevian workshop"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
            <div className="p-6 text-center border rounded-md border-dolevian-gray-200">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-dolevian-cream">
                <Clock className="h-7 w-7 text-dolevian-gold" />
              </div>
              <h3 className="mb-3 font-serif text-xl">Timeless Design</h3>
              <p className="text-dolevian-gray-600">
                We create pieces that transcend fleeting trends, focusing on elegant designs that remain relevant season after season.
              </p>
            </div>
            <div className="p-6 text-center border rounded-md border-dolevian-gray-200">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-dolevian-cream">
                <Heart className="h-7 w-7 text-dolevian-gold" />
              </div>
              <h3 className="mb-3 font-serif text-xl">Crafted With Care</h3>
              <p className="text-dolevian-gray-600">
                Each Dolevian piece is crafted with meticulous attention to detail, ensuring exceptional quality and lasting value.
              </p>
            </div>
            <div className="p-6 text-center border rounded-md border-dolevian-gray-200">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-dolevian-cream">
                <Globe className="h-7 w-7 text-dolevian-gold" />
              </div>
              <h3 className="mb-3 font-serif text-xl">Sustainable Practices</h3>
              <p className="text-dolevian-gray-600">
                We're committed to responsible production methods and sourcing materials that minimize environmental impact.
              </p>
            </div>
          </div>

          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-md overflow-hidden">
              <img
                src="./images/Dole5.jpg"
                alt="Dolevian team"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 font-serif text-3xl">Our Team</h2>
              <p className="mb-4 text-dolevian-gray-600">
                Behind every Dolevian creation is a team of skilled artisans, designers, and professionals who share a passion for exceptional craftsmanship. Many of our team members have been with us for years, developing specialized expertise that ensures the consistent quality for which we're known.
              </p>
              <p className="text-dolevian-gray-600">
                We foster a creative environment where innovation is encouraged, and traditional techniques are honored. This balance of respecting heritage while embracing contemporary ideas enables us to create clothing that resonates with discerning individuals who value both style and substance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;