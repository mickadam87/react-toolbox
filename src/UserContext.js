import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        auth,
        setAuth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
