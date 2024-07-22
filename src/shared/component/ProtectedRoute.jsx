import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log('Protected route accessed. Is authenticated:', isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/login_page" />;
};

export default ProtectedRoute;
