import React from 'react'
import { Link, useRoutes } from 'react-router-dom'

import { Home } from './components/pages/Home'
import { About } from './components/pages/About'

const NoMatch = () => <div>Error no route path matched</div>
const Profile = () => <div>My Profile</div>

const App = () => {

    const routeElements = useRoutes([
        {
            path: '/',
            element: <Home />,
            children: [
                { path: '/profile', element: <Profile /> }
            ]
        },
        { path: '/about', element: <About /> },
        { path: '*', element: <NoMatch /> },
    ]);

    return (
        <div>
            <Link to="/">Home</Link>

            <Link to="/profile">Profile</Link>

            <Link to="/about">About</Link>

            {routeElements}

        </div>
    )

}

export default App;
