export type Product = {
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