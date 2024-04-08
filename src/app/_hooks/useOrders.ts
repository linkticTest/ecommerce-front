// Libs
import { useEffect, useState } from 'react';
import { ORDERS_MOCK_LIST } from '../_mocks';
import { Order } from '../_types';
import { API_URL } from '../_constants';
// Store

const useOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>(ORDERS_MOCK_LIST);

  const getData = async (): Promise<Order[]> => {
    setIsLoading(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idNumber: '85441750',
        token: "85441750"
      })
    };

    try {
      const response = await fetch(`${API_URL}/dev/api/getOrder`, requestOptions);
      const dataJson = await response.json();
      setOrders(dataJson.orderDTO);
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
    orders
  };
};

export default useOrders;
