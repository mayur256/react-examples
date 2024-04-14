import { ReactElement } from "react";
import { ProductCard } from "../../components/ProductCard";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { deleteProductById, getAllProducts } from "../../api";
import { Product } from "../../utils/types";
import { Loader } from "../../components/Loader";
import { Toast } from "flowbite-react";

export function Products(): ReactElement {
    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts
    });

    const { isPending, mutate, isSuccess } = useMutation({
        mutationFn: (id: string) => deleteProductById(id),
        onSuccess: () => {
            queryclient.invalidateQueries({ queryKey: ['products'] })
        }
    })

    const queryclient = useQueryClient();

    if (isLoading || isPending) {
        return <Loader />
    }

    const deleteProduct = (prodId: string) => {
        mutate(prodId)
    }

    return (
        <div className="bg-white py-24 sm:py-32">
            {isSuccess && (
                <Toast>
                    <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
                    <Toast.Toggle />
                </Toast>
            )}

            <div className="mx-auto grid max-w-7xl gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                {products?.map((product: Product) => (
                    <ProductCard
                        key={`${product.id}-${product.title}`}
                        product={product}
                        deleteProduct={deleteProduct}
                    />
                ))}
            </div>
        </div>
    )
};
