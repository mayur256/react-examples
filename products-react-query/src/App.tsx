import { ReactElement } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"

import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { AddEditProduct } from "./pages/AddEditProduct";

const queryClient = new QueryClient();

function App(): ReactElement {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Outlet />,
            children: [
                { path: "/products", element: <Products /> },
                { path: "product/:id", element: <Product /> },
                { path: "product/add-update/:id", element: <AddEditProduct /> },
            ]
        },
    ]);

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <RouterProvider router={routes} />
        </QueryClientProvider>
    )
}

export default App
