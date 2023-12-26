import './App.css'
import RemoteApp from "remote_app/RemoteApp";
import useCount from "remote_app/store";

function App() {
    const [count] = useCount();
    return (
        <div>
            <h1>Host application</h1>
            <h2>Count: {count}</h2>

            <RemoteApp />
        </div>
    )
}

export default App
