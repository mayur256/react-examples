import { useLocation } from "react-router-dom"

export function LocationDetails() {
    const location = useLocation()
    
    return (
        <div>
            <h5>Location Details</h5>
            <p data-testid="key">{location.key}</p>
            <p data-testid="pathname">{location.pathname}</p>
            <p data-testid="hash">{location.hash}</p>
            <p data-testid="search">{location.search}</p>
            <p data-testid="state">{location.state}</p>
        </div>
    )
}