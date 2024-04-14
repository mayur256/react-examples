import { Product } from "../utils/types"

export const getAllProducts = async (): Promise<Product[]> => {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json()
}

export const fetchProductById = async (prodId: string): Promise<Product | undefined> => {
    if (prodId) {
        const res = await fetch("https://fakestoreapi.com/products/" + prodId);
        return await res.json()
    }
    
}

export const deleteProductById = async (prodId: string): Promise<Product | undefined> => {
    if (prodId) {
        const res = await fetch("https://fakestoreapi.com/products/" + prodId, {
            method: 'DELETE'
        });
        return await res.json()
    }
    
}