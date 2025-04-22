import React, { useEffect } from 'react';
import ProductGrid from '../components/common/ProductGrid';
import { products, getProductCategories } from '../utils/data';

const Shop: React.FC = () => {
  const categories = getProductCategories();

  useEffect(() => {
    document.title = 'Shop | Dolevian';
  }, []);

  return (
    <div className="pt-24">
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h5 className="text-dolevian-gold uppercase tracking-wider text-sm mb-2">Collection</h5>
          <h1 className="section-title">Our Products</h1>
          <p className="text-dolevian-gray-600">
            Explore our collection of premium clothing and accessories, each piece designed
            with attention to detail and crafted from the finest materials.
          </p>
        </div>

        <ProductGrid products={products} filters={{ categories }} />
      </div>
    </div>
  );
};

export default Shop;