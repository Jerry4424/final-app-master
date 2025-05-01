import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  // Set the initial user state to null to make no user logged in at FIRST!!!
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
