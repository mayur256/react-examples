import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// Remote
import RemoteAppModule from "remote_app/RemoteApp";
const RemoteApp = RemoteAppModule.default;

const App = () => (
    <div className="container">
        <div>Name: wp-host</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>

        <RemoteApp />
    </div>
);

ReactDOM.createRoot(document.getElementById("app"))
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
