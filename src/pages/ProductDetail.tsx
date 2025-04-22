import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Check } from 'lucide-react';
import { getProductById } from '../utils/data';
import Button from '../components/common/Button';
import OrderForm from '../components/common/OrderForm';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes ? product.sizes[0] : undefined
  );  
  const [showOrderForm, setShowOrderForm] = useState(false);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Dolevian`;
    } else {
      document.title = 'Product Not Found | Dolevian';
    }
  }, [product]);

  if (!product) {
    return (
      <div className="py-32 text-center container-custom">
        <h1 className="section-title">Product Not Found</h1>
        <p className="mb-6">The product you are looking for does not exist.</p>
        <Button to="/shop">Return to Shop</Button>
      </div>
    );
  }

  const handleOrderClick = () => {
    setShowOrderForm(true);
  };

  const closeOrderForm = () => {
    setShowOrderForm(false);
  };

  return (
    <div className="pt-24">
      <div className="py-12 container-custom">
        <Link to="/shop" className="inline-flex items-center mb-8 text-dolevian-charcoal hover:text-dolevian-gold">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-md">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-auto"
            />
          </div>

          <div>
            {product.tag && (
              <span className="inline-block px-3 py-1 mb-4 text-xs text-white rounded bg-dolevian-gold">
                {product.tag}
              </span>
            )}
            <h1 className="mb-2 font-serif text-3xl md:text-4xl">{product.name}</h1>
            <p className="mb-6 text-2xl font-medium">${product.price.toFixed(2)}</p>

            <div className="mb-8">
              <p className="text-dolevian-gray-600">{product.description}</p>
            </div>

            {product.features && (
              <div className="mb-8">
                <h3 className="mb-3 font-serif text-lg">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-dolevian-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.sizes && (
              <div className="mb-8">
                <h3 className="mb-3 font-serif text-lg">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 flex items-center justify-center border ${
                        selectedSize === size
                          ? 'border-dolevian-gold bg-dolevian-gold/10 text-dolevian-gold'
                          : 'border-dolevian-gray-300 hover:border-dolevian-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button onClick={handleOrderClick}>Order Now</Button>
          </div>
        </div>

        {showOrderForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
            <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slide-up">
              <div className="p-6">
                <h2 className="mb-4 font-serif text-2xl">Order {product.name}</h2>
                <OrderForm product={product} onClose={closeOrderForm} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;