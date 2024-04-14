import { ReactElement, useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"
import { fetchProductById } from "../../api";
import { Loader } from "../../components/Loader";
import { Product as ProductType } from "../../utils/types";

export function Product(): ReactElement {

    const { id } = useParams();
    const navigate = useNavigate();

    /* const [product, setProduct] = useState<ProductType | null>(null);
    const [loading, setLoading] = useState(false) */

    const { data: product, isLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProductById(id ?? ''),
        staleTime: 30 * 1000
    })

    /* useEffect(() => {
        getProduct(id ?? '')
    }, [id])

    const getProduct = async (id: string) => {
        setLoading(true)
        try {
            const product = await fetchProductById(id);
            if (product) setProduct(product)
            
        } finally {
            setLoading(false)
        }
    } */

    if (isLoading) {
        return <Loader />
    }

    // main renderer
    return (
        <div className="flex font-sans" >
            <div className="flex-none w-48 relative">
                <img
                    src={product?.image ?? ''}
                    alt={product?.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        {product?.title}
                    </h1>
                    <div className="text-lg font-semibold text-slate-500">
                        ${product?.price}
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        In stock
                    </div>
                </div>
                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                   {product?.description}
                </div>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                            Buy now
                        </button>

                        <button
                            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                            type="button"
                            onClick={() => navigate(-1)}
                        >
                            Go Back
                        </button>
                    </div>
                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button>
                </div>
                <p className="text-sm text-slate-700">
                    Free shipping on all continental US orders.
                </p>
            </form>
        </div >
    )
}
