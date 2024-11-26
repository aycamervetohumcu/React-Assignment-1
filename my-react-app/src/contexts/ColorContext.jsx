import { createContext, useState } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [navbarColor, setNavbarColor] = useState("#333"); 

  return (
    <ColorContext.Provider value={{ navbarColor, setNavbarColor }}>
      {children}
    </ColorContext.Provider>
  );
}
