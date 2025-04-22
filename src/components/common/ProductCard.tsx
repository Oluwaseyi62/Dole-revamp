import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import Button from './Button';

interface ProductCardProps {
  product: Product;
  onOrderClick?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrderClick }) => {
  const { id, name, price, image, tag, category } = product;
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        {tag && <span className="product-tag">{tag}</span>}
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs tracking-wider uppercase text-dolevian-gray-500">
            {category}
          </span>
        </div>
        <Link to={`/product/${id}`}>
          <h3 className="mb-2 font-serif text-lg transition-colors hover:text-dolevian-gold">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-4">
          <span className="font-medium">${price.toFixed(2)}</span>
          <Button
            variant="secondary"
            className="px-4 py-2"
            onClick={() => onOrderClick && onOrderClick(product)}
          >
            <ShoppingBag className="w-4 h-4 mr-1" />
            <span>Order</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;