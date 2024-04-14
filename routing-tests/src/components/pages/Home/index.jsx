import { Outlet } from "react-router-dom"

export function Home() {
    return (
        <div>
            <h2 data-testid="title">Home Page</h2>

            <p data-testid="summary">Welcome to the Home page</p>

            <Outlet />
        </div>
    )
}