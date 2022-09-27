// Top level imports
import { ReactElement } from 'react';

// React - Router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import AppContainer from './pages/AppContainer';
import Home from './pages/Home';
import Contact from './pages/Contact';

// Component definition
function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppContainer />} >
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
