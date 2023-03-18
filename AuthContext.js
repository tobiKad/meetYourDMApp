import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const storeUserData = (userData) => {
    setUser(userData);
  };

  const isLoggedIn = () => {
    setUser(true);
    return user !== null;
  };

  const logout = () => {
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{
        user,
        storeUserData,
        isLoggedIn: isLoggedIn(),
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
