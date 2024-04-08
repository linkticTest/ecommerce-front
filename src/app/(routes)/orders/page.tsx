"use client";

import Layout from "@/app/_components/Layout";
import useOrders from "@/app/_hooks/useOrders";

export default function Page() {

    const { orders } = useOrders();

    return (
        <Layout>
            <>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        <p>Ordenes</p>
                        <div className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Permite explorar, visualizar y ordenes de tu carrito de compras fácilmente.</div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Productos
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Usuario
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Fecha Creacion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {order?.idOrder}
                                        </th>
                                        <td className="px-6 py-4">
                                            {order?.status}
                                        </td>
                                        <td className="px-6 py-4">
                                            {order?.products?.length}
                                        </td>
                                        <td className="px-6 py-4">
                                            {order?.userDTO.firstName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {order?.createDt}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </>
        </Layout>
    )
}