// Top level imports
import { FormEvent, ReactElement } from "react";

// import external scss files
import "./index.scss";

// Component definition
export default function Login(): ReactElement {

    /** Handler function - starts */
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(event);
    };
    /** Handler function - ends */
    // Main JSX
    return (
        <form onSubmit={handleFormSubmit}>
            <h1>Welcome</h1>
            
            <div className="rowField">
                <input type="text" name="email" placeholder="Email" required />
            </div>

            <div className="rowField">
                <input type="text" name="password" placeholder="Password" required />
            </div>

            <div className="rowField">
                <button type="submit">Submit</button>
            </div>
       </form>
    )
}
