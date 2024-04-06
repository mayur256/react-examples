import { ReactElement } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Link
  } from "react-router-dom";

// Page Components
import { Posts } from "./pages/Posts";

// Instantiate router
const router = createBrowserRouter([
    { path: '/', element: <AppLinks /> },
    { path: '/posts', element: <Posts /> }
])

function AppLinks(): ReactElement {
    return (
        <div>
            <Link to="/posts">Posts</Link>
        </div>
    )
}

// Component definition
export default function App(): ReactElement {
    return (
        <RouterProvider router={router} />
    )
}