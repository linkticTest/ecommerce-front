// Libs
import { useState } from 'react';
import { ORDERS_MOCK_LIST } from '../_mocks';
import { Order } from '../_types';
// Store

const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>(ORDERS_MOCK_LIST);

  return { 
    orders
  };
};

export default useOrders;
