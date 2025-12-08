import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const BusinessSpecification: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('https://api.example.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className={clsx('p-4', isDesktopOrLaptop ? 'grid grid-cols-3 gap-4' : 'grid grid-cols-1 gap-2')}>
      {products.map(product => (
        <div key={product.id} role="region" aria-label={`Product: ${product.name}`} tabIndex={0}>
          <img src={product.image} alt={`${product.name} image`} className="w-full h-auto rounded-lg shadow-md" />
          <h3 className="mt-2 text-xl font-bold">{product.name}</h3>
          <p className="text-gray-500 mt-1">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold">${product.price.toFixed(2)}</span>
            {/* Add your button or other UI elements here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const BusinessSpecification: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('https://api.example.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className={clsx('p-4', isDesktopOrLaptop ? 'grid grid-cols-3 gap-4' : 'grid grid-cols-1 gap-2')}>
      {products.map(product => (
        <div key={product.id} role="region" aria-label={`Product: ${product.name}`} tabIndex={0}>
          <img src={product.image} alt={`${product.name} image`} className="w-full h-auto rounded-lg shadow-md" />
          <h3 className="mt-2 text-xl font-bold">{product.name}</h3>
          <p className="text-gray-500 mt-1">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold">${product.price.toFixed(2)}</span>
            {/* Add your button or other UI elements here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessSpecification;