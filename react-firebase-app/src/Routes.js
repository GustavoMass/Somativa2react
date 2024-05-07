import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './Cadastro';
import Login from './Login';
import Principal from './Principal';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/principal" element={<Principal />} />
    </Routes>
  </Router>
);

export default AppRoutes;
