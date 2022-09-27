// top level imports
import { ReactElement } from "react";

// React Router
import { Route, Routes } from "react-router-dom";

// External CSS
import "./index.scss";

// Components
import Navbar from "../../components/Navbar";
import Home from "../Home";
import Contact from "../Contact";

// Component definition
export default function AppContainer(): ReactElement {
    return (
        <>
            <Navbar />
            <div className="app-container">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </>
    );
};
