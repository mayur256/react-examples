// Top level imports
import { ReactElement } from "react";

// React-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import AppsList from "./pages/AppsList";
import HospitalForm from "./pages/HospitalForm";
import DynamicForm from "./pages/DynamicForm";

// CSS
import "./App.css";

// Creates routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppsList />,
    },
    {
        path: "/hospital-form",
        element: <HospitalForm />,
    },
    {
        path: "/dynamic-form",
        element: <DynamicForm />,
    },
]);

// Component definition
function App(): ReactElement {
    return <RouterProvider router={router}/>
}

export default App;
