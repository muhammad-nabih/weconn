"use client";
import { useContext, createContext, useState } from "react";

// save create context in constant
const LinksContext = createContext();

// make custom hook instead of use context hook
export const useLinks = () => useContext(LinksContext);

// make main function LinksProvider use children in param
export default function LinksProvider({ children }) {
  const [links, setLinks] = useState([
    { id: 1, itemContent: "Explore", url: "/explore", catchLinkById: 1 },
    { id: 2, itemContent: "Articles", url: "/articles", catchLinkById: 2 },
    { id: 3, itemContent: "News", url: "/news", catchLinkById: 3 },
    { id: 4, itemContent: "IDOs", url: "/idos", catchLinkById: 4 },
  ]);

  // Make Links dynamically active
  const [activeStatus, setActiveStatus] = useState(null);
  
  function handleChangeActive(newActiveStatus) {
    setActiveStatus(newActiveStatus);
  }
  return (
    <LinksContext.Provider
      value={{ links, setLinks, activeStatus, setActiveStatus,handleChangeActive }}
    >
      {children}
    </LinksContext.Provider>
  );
}
