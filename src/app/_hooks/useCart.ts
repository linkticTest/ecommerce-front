// Libs
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { API_URL } from '../_constants';

const useCart = () => {
  const [productsInCart, setProductsInCart] = useState<number[]>([]);

  const MySwal = withReactContent(Swal);

  const addToCart = (productId: number) => {
    if (isProductInCart(productId)) {
      return;
    }

    setProductsInCart(prevState => ([
      ...prevState,
      productId
    ]))
  }

  const createOrderRequest = async () => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        products: productsInCart,
        token: "85441750"
      })
    };

    try {
      const response = await fetch(`${API_URL}/dev/api/orders`, requestOptions);
      const dataJson = await response.json();
      return dataJson;

    } catch (error) {
      throw error;
    }
  }

  const createOrder = async () => {
    try {
      MySwal.fire({
        title: 'Creando Orden',
        didOpen: () => {
          MySwal.showLoading()
        },
      });

      const createOrderResponse = await createOrderRequest();

      if (createOrderResponse.idOrder) {
        MySwal.fire({
          icon: 'success',
          title: 'Orden Creada',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/orders';
          }
        });
      }

    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error al crear la orden',
      });
    }
  }

  const hasProductsInCart = () => {
    return productsInCart.length > 0;
  }

  const removeProductFromCart = (productId: number) => {
    if (!isProductInCart(productId)) {
      return;
    }

    setProductsInCart(productsInCart.filter(productItem => productItem !== productId))
  }

  const isProductInCart = (productId: number) => {
    return productsInCart.some(item => item === productId);
  }

  return {
    addToCart,
    isProductInCart,
    hasProductsInCart,
    removeProductFromCart,
    createOrder,
    productsInCart
  };
};

export default useCart;
