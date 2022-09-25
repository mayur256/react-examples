// Top level imports
import { FormEvent, ReactElement, useState } from "react";
// types
import { IAuthUser } from "../../common/types";

// import external scss files
import "./index.scss";

// Component definition
export default function Login(): ReactElement {
    // state declarations
    const [authUser, setAuthUser] = useState<IAuthUser | null>(null);

    /** Handler function - starts */
    
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const formEl = event.target as HTMLFormElement;
        const formData = new FormData(formEl);
        const payload: {[key: string]: string | File} = {};
        for (const [key, value] of formData) {
            payload[key] = value;
        }
        
        fetch('/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(response => {
                if (response.status === 200 && response.error === false) {
                    setAuthUser(response.data);
                }
            })
            .catch(err => console.log(err));
    };

    /** Handler function - ends */
    // Main JSX
    return (
        <div className="loginPage">
            <form onSubmit={handleFormSubmit} data-testid="login-form">
                <h1>Welcome</h1>

                <div className="rowField">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        required
                        data-testid="email"
                    />
                </div>

                <div className="rowField">
                    <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        data-testid="password"
                        required
                    />
                </div>

                <div className="rowField">
                    <button
                        data-testid="submit-btn"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>

            {/** User details */}
            {authUser && (
                <div className="userDetails" data-testid="user-details">
                    <h1>User Details</h1>
                    <table cellSpacing={20}>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>{authUser?._id ?? 'user id'}</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{authUser?.name ?? 'name'}</td>
                            </tr>
                            <tr>
                                <td>Email / Username</td>
                                <td>{authUser?.userName ?? 'user name / email'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
