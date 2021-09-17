import React from "react";
import { Route, Switch } from "react-router";
import UserPage from "../../../Pages/UserPage";
import Unauthorised from "../../../Pages/401";

const UserRoleRoutes = () => {
  return (
    <Switch>
      <Route exact path="/user" component={UserPage}></Route>
      <Route path="*" component={Unauthorised}></Route>
    </Switch>
  );
};

export default UserRoleRoutes;
