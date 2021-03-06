import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
