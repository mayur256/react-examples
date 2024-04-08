import { ReactElement } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Link
  } from "react-router-dom";

// Page Components
import { Posts } from "./pages/Posts";
import { FileUpload } from "./pages/FileUpload";

// Instantiate router
const router = createBrowserRouter([
    { path: '/', element: <AppLinks /> },
    { path: '/posts', element: <Posts /> },
    { path: '/file-upload', element: <FileUpload /> }
])

function AppLinks(): ReactElement {
    return (
        <div className="d-flex flex-column">
            <Link to="/posts">Posts</Link>
            <Link to="/file-upload">File upload</Link>
        </div>
    )
}

// Component definition
export default function App(): ReactElement {
    return (
        <RouterProvider router={router} />
    )
}