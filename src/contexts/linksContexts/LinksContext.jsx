"use client";
import { useContext, createContext, useState } from "react";
// save create context in constant
const LinksContext = createContext();
// make custom hook instead of use context hook
export const useLinks = () => useContext(LinksContext);

// make main function LinksProvider use children in param
export default function LinksProvider({ children }) {
  const [links, setLinks] = useState([
    { id: 1, itemContent: "Explore", url: "/Explore" ,catchLinkById:1},
    { id: 2, itemContent: "Articles", url: "/Articles" ,catchLinkById:2},
    { id: 3, itemContent: "News", url: "/News" ,catchLinkById:3},
    { id: 4, itemContent: "IDOs", url: "/IDOs" ,catchLinkById:4},
  ]);
  return (
    <LinksContext.Provider value={{ links, setLinks }}>
      {children}
    </LinksContext.Provider>
  );
}
