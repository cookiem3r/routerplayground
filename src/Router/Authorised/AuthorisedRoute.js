import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

//This is a top level route to determin if a user even have access to the site
const AuthorisedRoute = ({ ...props }) => {
  const location = useLocation();

  const isValidUser = () => {
    //Insert Code here to determine if valid user of system.
    return false;
  };

  if (isValidUser()) return <Route {...props}></Route>;
  else return <Redirect to={{ pathname: "/401", state: { from: location } }} />;
};

export default AuthorisedRoute;
