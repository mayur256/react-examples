// top level imports
import { ReactElement } from "react";

// React-router
import { Link } from "react-router-dom";

// Component definition
export default function AppsList(): ReactElement {
    return (
        <ul>
            <li><Link to="/hospital-form">Hospital Form </Link></li>
            <li><Link to="/dynamic-form"> Dynamic Form </Link></li>
        </ul>
    )
}