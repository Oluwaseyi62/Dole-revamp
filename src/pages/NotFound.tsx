import React, { useEffect } from 'react';
import Button from '../components/common/Button';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Dolevian';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="font-serif text-8xl text-dolevian-gold mb-4">404</h1>
        <h2 className="font-serif text-3xl mb-2">Page Not Found</h2>
        <p className="text-dolevian-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button to="/">Return to Home</Button>
      </div>
    </div>
  );
};

export default NotFound;