import { ReactElement, useState } from 'react'
import './App.css'

function App(): ReactElement {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="remote-app-container">
            <h2>From Remote Application</h2>
            <h3>Count: {count}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            </div>
        </div>
    )
}

export default App
