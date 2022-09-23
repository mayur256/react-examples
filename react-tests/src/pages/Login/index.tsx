// Top level imports
import { ReactElement } from "react";

// Component definition
export default function Login(): ReactElement {
    return (
        <form>
            <label>User Name*</label>
            <input type="text" required />
       </form>
    )
}
