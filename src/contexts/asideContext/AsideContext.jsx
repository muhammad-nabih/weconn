"use client";
import { useState, createContext, useContext } from "react";

const AsideContext = createContext();

export const useAside = () => useContext(AsideContext);

export default function AsideProvider({ children }) {
  const [showAside, setShowAside] = useState(false);
  return (
    <AsideContext.Provider value={{ showAside, setShowAside }}>
      {children}
    </AsideContext.Provider>
  );
}
