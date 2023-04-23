import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [userId, setUserId] = useState(null);

  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
}