import React from "react";
import { ThemeContextProvider, ThemeContext } from "../ThemeContext";
import { UserContextProvider, UserContext } from "../UserContext";

export const useGlobalContext = () => {
  const GlobalContextProvider = ({ children }) => {
    return (
      <ThemeContextProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </ThemeContextProvider>
    );
  };

  return { UserContext, ThemeContext, GlobalContextProvider };
};
