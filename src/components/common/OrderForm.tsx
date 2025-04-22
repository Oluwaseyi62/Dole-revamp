import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '../../types';
import Button from './Button';

interface OrderFormProps {
  product: Product;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  paymentMethod: 'credit' | 'paypal';
  quantity: number;
  size?: string;
}

const OrderForm: React.FC<OrderFormProps> = ({ product, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    paymentMethod: 'credit',
    quantity: 1,
    size: 'M',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip Code is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // In a real app, you would send the form data to your backend here
        console.log('Order submitted:', { product, ...formData });
      }, 1500);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-dolevian-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-dolevian-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-serif text-xl mb-2">Order Placed Successfully!</h3>
        <p className="text-dolevian-gray-600 mb-6">
          Thank you for your order. We have sent a confirmation email to {formData.email}.
        </p>
        <Button onClick={onClose}>Close</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-dolevian-gray-600 mb-4">
            {product.name} - ${product.price.toFixed(2)}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-dolevian-gray-500 hover:text-dolevian-charcoal"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-dolevian-gray-700 mb-1">
            Quantity
          </label>
          <select
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="input-field"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {product.category.toLowerCase() === 'clothing' && (
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-dolevian-gray-700 mb-1">
              Size
            </label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="input-field"
            >
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="border-t border-b border-dolevian-gray-200 py-4 my-4">
        <h3 className="font-serif text-lg mb-4">Customer Information</h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-dolevian-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`input-field ${errors.fullName ? 'border-dolevian-error' : ''}`}
            />
            {errors.fullName && (
              <p className="text-dolevian-error text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dolevian-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`input-field ${errors.email ? 'border-dolevian-error' : ''}`}
            />
            {errors.email && (
              <p className="text-dolevian-error text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-dolevian-gray-700 mb-1">
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`input-field ${errors.address ? 'border-dolevian-error' : ''}`}
            />
            {errors.address && (
              <p className="text-dolevian-error text-xs mt-1">{errors.address}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-dolevian-gray-700 mb-1">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`input-field ${errors.city ? 'border-dolevian-error' : ''}`}
              />
              {errors.city && (
                <p className="text-dolevian-error text-xs mt-1">{errors.city}</p>
              )}
            </div>

            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-dolevian-gray-700 mb-1">
                Zip Code *
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className={`input-field ${errors.zipCode ? 'border-dolevian-error' : ''}`}
              />
              {errors.zipCode && (
                <p className="text-dolevian-error text-xs mt-1">{errors.zipCode}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-dolevian-gray-700 mb-1">
              Country *
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`input-field ${errors.country ? 'border-dolevian-error' : ''}`}
            />
            {errors.country && (
              <p className="text-dolevian-error text-xs mt-1">{errors.country}</p>
            )}
          </div>
        </div>
      </div>

      <div className="py-2">
        <h3 className="font-serif text-lg mb-4">Payment Method</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <input
              id="credit"
              name="paymentMethod"
              type="radio"
              value="credit"
              checked={formData.paymentMethod === 'credit'}
              onChange={handleChange}
              className="h-4 w-4 text-dolevian-gold focus:ring-dolevian-gold border-dolevian-gray-300"
            />
            <label htmlFor="credit" className="ml-3 block text-sm font-medium text-dolevian-gray-700">
              Credit Card
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              value="paypal"
              checked={formData.paymentMethod === 'paypal'}
              onChange={handleChange}
              className="h-4 w-4 text-dolevian-gold focus:ring-dolevian-gold border-dolevian-gray-300"
            />
            <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-dolevian-gray-700">
              PayPal
            </label>
          </div>
        </div>
      </div>

      <div className="border-t border-dolevian-gray-200 pt-4 flex justify-between items-center">
        <div>
          <p className="font-medium">Total: ${(product.price * formData.quantity).toFixed(2)}</p>
          <p className="text-xs text-dolevian-gray-500">Includes taxes & shipping</p>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
        >
          {isSubmitting ? 'Processing...' : 'Place Order'}
        </Button>
      </div>
    </form>
  );
};

export default OrderForm;