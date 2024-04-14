import { ReactElement } from "react";
import { ProductCard } from "../../components/ProductCard";

import { useQuery } from "@tanstack/react-query"

import { getAllProducts } from "../../api";
import { Product } from "../../utils/types";

export function Products(): ReactElement {
    const { data: products } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts
    });
    
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                {products?.map((product: Product) => (
                    <ProductCard
                        key={`${product.id}-${product.title}`}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
};
