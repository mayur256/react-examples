import { ReactElement } from 'react'
import './App.css'

function App(): ReactElement {
    return (
        <form>
            <input id="nameInput" />
            
            <button type="submit" id="submit-btn">Submit</button>
        </form>
    )
}

export default App
