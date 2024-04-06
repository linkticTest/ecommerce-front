export type Product = {
    id: string;
    name: string;
    price: number;
};

export type Order = {
    id: string;
    created: Date;
    updated: Date;
    products: Product[];
    status: string;
    userId: number;
};