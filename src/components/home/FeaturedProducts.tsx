import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../common/ProductCard';
import Button from '../common/Button';
import { Product } from '../../types';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="py-16 bg-dolevian-cream">
      <div className="container-custom">
        <div className="flex flex-col justify-between mb-12 md:flex-row md:items-end">
          <div>
            <h5 className="mb-2 text-sm tracking-wider uppercase text-dolevian-gold">Collection</h5>
            <h2 className="section-title">Featured Products</h2>
            <p className="max-w-xl text-dolevian-gray-600">
              Discover our carefully curated selection of premium pieces, designed
              for those who appreciate exceptional craftsmanship and timeless style.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button to="/shop" variant="secondary" className="group">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;