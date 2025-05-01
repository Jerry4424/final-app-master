import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    selectedItems: [], // Initialize with an empty array
  });

  const [services, setServices] = useState(['Construction', 'Labor', 'Materials']); // Shared services state

  return (
    <UserContext.Provider value={{ user, setUser, services, setServices }}>
      {children}
    </UserContext.Provider>
  );
};
