export type Product = {
    created: string;
    id_product: number;
    id: number;
    name: string;
    price: number;
    create_dt: string;
    category: string;
};

export type Order = {
    idOrder: string;
    createDt: string;
    userDTO: {
        firstName: string;
    }
    updated: Date;
    products: Product[];
    status: string;
    userId: number;
};