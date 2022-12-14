import React, { useContext } from "react";
import { Route , Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const PrivateRoute = ({ children }) => {
  const {currentUser} = useContext(AuthContext);
  
  return (
    currentUser ? children : <Navigate to={'/login'} />
  );
};


export default PrivateRoute;