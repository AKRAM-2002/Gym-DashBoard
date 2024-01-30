// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AuthPage />} />
        {/* Add other routes for your application */}
      </Routes>
    </Router>
  );
};

export default App;
