// Top level imports
import { ReactElement } from 'react';

// React - Router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import AppContainer from './pages/AppContainer';

// Component definition
function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
