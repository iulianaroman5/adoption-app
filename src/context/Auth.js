import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [nextAction, setNextAction] = useState("");


  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
    // console.log(currentUser)
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        nextAction,
        setNextAction
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};