// Libs
import { useEffect, useState } from 'react';
import { Product } from '../_types';
import { API_URL } from '../_constants';
// Store

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>();

  const getData = async (): Promise<Product[]> => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/dev/api/products`);
      const dataJson = await response.json();
      setProducts(dataJson.body);
      return dataJson;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () => {
      getData()
    },
    []
  );

  return {
    products,
    isLoading
  };
};

export default useProducts;
