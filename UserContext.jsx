import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');

  const setUserEmailContext = (email) => {
    console.log('Setting userEmail to:', email);
    setUserEmail(email);
  };

  return (
    <UserContext.Provider value={{ userEmail, setUserEmailContext }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

