import { ReactElement } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { AddEditProduct } from "./pages/AddEditProduct";

function App(): ReactElement {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Outlet />,
            children: [
                { path: "/products", element: <Products /> },
                { path: "product/view/:id", element: <Product /> },
                { path: "product/add-update/:id", element: <AddEditProduct /> },
            ]
        },
    ]);

    return (
        <RouterProvider router={routes} />
    )
}

export default App
