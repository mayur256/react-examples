// Top level imports
import { ReactElement } from 'react';

// React - Router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Pages
import Login from './pages/Login';

// Component definition
function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
