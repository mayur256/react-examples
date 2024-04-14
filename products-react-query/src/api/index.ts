import { Product } from "../utils/types"

export const getAllProducts = async (): Promise<Product[]> => {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json()
}