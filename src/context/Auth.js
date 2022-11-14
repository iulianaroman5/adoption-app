import { getAuth } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  const [adoptAnimal, setAdoptAnimal] =useState({});


  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        adoptAnimal,
        setAdoptAnimal
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useCtx (){
  const ctx = useContext(AuthContext);
  if( ctx === undefined){
    throw new Error ('Error')
  }

  return ctx;
}