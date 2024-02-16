"use client";
import { createContext, useContext, useState } from "react";

const SizeContext = createContext();
export const useSizeReading = () => useContext(SizeContext);

export default function SizeProvider({ children }) {
  const [textSize, setTextSize] = useState("medium");
  return (
    <SizeContext.Provider value={{ textSize, setTextSize }}>
      {children}
    </SizeContext.Provider>
  );
}
