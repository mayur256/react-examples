import { ReactElement } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Link
  } from "react-router-dom";

// Page Components
import { Posts } from "./pages/Posts";
import { FileUpload } from "./pages/FileUpload";
import { RC1, RC2 } from "./pages/Routes";

// Instantiate router
const router = createBrowserRouter([
    { path: '/', element: <AppLinks /> },
    { path: '/posts', element: <Posts /> },
    { path: '/file-upload', element: <FileUpload /> },
    { path: '/component-1', element: <RC1 /> },
    { path: '/component-2', element: <RC2 /> }
])

export function AppLinks(): ReactElement {
    return (
        <div className="d-flex flex-column">
            <Link to="/posts">Posts</Link>
            <Link to="/file-upload">File upload</Link>
            <Link to="/component-1">Component 1</Link>
            <Link to="/component-2">Component 2</Link>
        </div>
    )
}

// Component definition
export default function App(): ReactElement {
    return (
        <RouterProvider router={router} />
    )
}
