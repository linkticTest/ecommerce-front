// Libs
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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

  const createOrder = async () => {
    try {
      MySwal.fire({
        title: 'Creando Orden',
        didOpen: () => {
          MySwal.showLoading()
        },
      });

      setTimeout(() => {
        MySwal.fire({
          icon: 'success',
          title: 'Orden Creada',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/orders';
          }
        });
      }, 2000)

    } catch (error) {
      MySwal.fire({
        icon: 'success',
        title: 'Orden Creada',
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
