import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'DV Classic T-Shirt',
    description: 'Our signature DV t-shirt featuring the iconic small logo on the front. Made from premium cotton for ultimate comfort and style.',
    price: 49.99,
    image: '/images/Dole2.jpg',
    category: 'Clothing',
    tag: 'Bestseller',
    features: ['Premium cotton', 'Classic fit', 'Small DV logo', 'Ribbed crew neck'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    inStock: true
  },
  {
    id: '2',
    name: 'Undeniable T-Shirt',
    description: 'Make a statement with our Undeniable t-shirt. Features bold back print with our signature "Undeniable Unstoppable" design.',
    price: 54.99,
    image: '/images/Photo1.jpg',
    category: 'Clothing',
    tag: 'New',
    features: ['Premium cotton', 'Oversized fit', 'Bold back print', 'Signature design'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    inStock: true
  },
  {
    id: '2',
    name: 'Undeniable T-Shirt 2',
    description: 'Make a statement with our Undeniable t-shirt. Features bold back print with our signature "Undeniable Unstoppable" design.',
    price: 54.99,
    image: '/images/dole3.jpg',
    category: 'Clothing',
    tag: 'New',
    features: ['Premium cotton', 'Oversized fit', 'Bold back print', 'Signature design'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductCategories = (): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};