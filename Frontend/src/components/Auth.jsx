import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isLoggedIn = true; // Replace with your authentication logic

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default RequireAuth;
