"use client";
import { useContext, createContext, useState } from "react";

// save create context in constant
const LinksContext = createContext();

// make custom hook instead of use context hook
export const useLinks = () => useContext(LinksContext);

// make main function LinksProvider use children in param
export default function LinksProvider({ children }) {
  const [links, setLinks] = useState([
    { id: 1, itemContent: "Explore", url: "/" },
    { id: 2, itemContent: "Articles", url: "/articles" },
    { id: 3, itemContent: "News", url: "/news" },
    { id: 4, itemContent: "IDOs", url: "/idos" },
  ]);

  return (
    <LinksContext.Provider value={{ links }}>{children}</LinksContext.Provider>
  );
}
