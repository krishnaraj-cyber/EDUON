import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setIsAuthenticated(true);
      setToken(savedToken);
    }
  }, []);

  const login = (newToken) => {
    setIsAuthenticated(true);
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
