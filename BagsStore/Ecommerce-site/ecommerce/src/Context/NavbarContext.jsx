import React, { createContext, useState } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isFixed, setIsFixed] = useState(false);

  return (
    <NavbarContext.Provider value={{ isFixed, setIsFixed }}>
      {children}
    </NavbarContext.Provider>
  );
};
