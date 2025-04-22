import React, { useState } from 'react';
import ProductCard from './ProductCard';
import OrderForm from './OrderForm';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  filters?: {
    categories: string[];
  };
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, filters }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeOrderForm = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category.toLowerCase() === activeCategory);
  
  const categories = filters?.categories || [];

  return (
    <div>
      {filters && categories.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              activeCategory === 'all'
                ? 'bg-dolevian-gold text-white'
                : 'bg-dolevian-cream text-dolevian-charcoal hover:bg-dolevian-lightGold hover:text-white'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === category.toLowerCase()
                  ? 'bg-dolevian-gold text-white'
                  : 'bg-dolevian-cream text-dolevian-charcoal hover:bg-dolevian-lightGold hover:text-white'
              }`}
              onClick={() => setActiveCategory(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOrderClick={handleOrderClick}
          />
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className="p-6">
              <h2 className="font-serif text-2xl mb-4">Order {selectedProduct.name}</h2>
              <OrderForm product={selectedProduct} onClose={closeOrderForm} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;