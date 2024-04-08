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
    id: string;
    created: Date;
    updated: Date;
    products: Product[];
    status: string;
    userId: number;
};