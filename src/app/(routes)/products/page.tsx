'use client';

import Cart from "@/app/_components/Icons/Cart";
import Orders from "@/app/_components/Icons/Orders";
import Remove from "@/app/_components/Icons/Remove";
import Layout from "@/app/_components/Layout";
import useCart from "@/app/_hooks/useCart";
import useProducts from "@/app/_hooks/useProducts";

export default function Page() {

    const { products } = useProducts();
    const {
        addToCart,
        isProductInCart,
        removeProductFromCart,
        hasProductsInCart,
        createOrder
    } = useCart();

    return (
        <Layout>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-between items-center">
                    <div className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        <p>Productos</p>
                        <div className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Permite explorar, visualizar y añadir productos a tu carrito de compras fácilmente.</div>
                    </div>
                    <div>
                        {hasProductsInCart() && (
                            <button 
                                onClick={createOrder}
                                type="button" 
                                className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2">
                                <Orders />&nbsp;Crear Orden
                            </button>
                        )}
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Categoria
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha Creacion
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Agregar al Carrito
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {product?.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {product.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product?.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product?.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {product?.create_dt}
                                    </td>
                                    <th className="px-6 py-4 text-center">
                                        {isProductInCart(product.id) ? (<>
                                            <div className="cursor-pointer" onClick={() => removeProductFromCart(product.id)}>
                                                <Remove />
                                            </div>
                                        </>) : <>
                                            <div className="cursor-pointer" onClick={() => addToCart(product.id)}>
                                                <Cart />
                                            </div>
                                        </>}
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}