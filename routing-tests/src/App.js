import React from 'react'
import { Link, useRoutes } from 'react-router-dom'

import { Home } from './components/pages/Home'
import { About } from './components/pages/About'
import { LocationDetails } from './components/pages/LocationDetails'

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
        { path: '/location-details', element: <LocationDetails /> },
        { path: '*', element: <NoMatch /> },
    ]);

    return (
        <div>
            <Link to="/">Home</Link>

            <Link to="/profile">Profile</Link>

            <Link to="/about">About</Link>

            <Link to="/location-details">Location Details</Link>

            <Link to="/no-match">No match Route</Link>

            {routeElements}

        </div>
    )

}

export default App;
