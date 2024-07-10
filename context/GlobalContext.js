"use client";
import { createContext, useContext, useState } from "react";

// Create context
const GlobalContext = createContext();

// Create a provider
export function GlobalProvider({ children }) {
  const [globalMatch, setGlobalMatch] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        globalMatch,
        setGlobalMatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Create a custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
