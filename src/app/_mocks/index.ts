import { Order } from "../_types";

export const PRODUCT_MOCK_LIST = [
    {
        id: '1',
        name: 'Producto 1',
        price: 12000,
    },
    {
        id: '2',
        name: 'Producto 2',
        price: 15000,
    },
]

export const ORDERS_MOCK_LIST =  [
    {
        id: '1',
        created: new Date('2024-04-01'),
        updated: new Date('2024-04-01'),
        products: PRODUCT_MOCK_LIST,
        status: 'Pendiente',
        userId: 1,
    }
] as Order[];
