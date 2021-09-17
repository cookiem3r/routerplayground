import React from "react";
import { Switch, Route } from "react-router";
import AdminPage from "../../../Pages/AdminPage";
import Unauthorised from "../../../Pages/401";

const AdminRoleRoutes = () => {
  return (
    <Switch>
      <Route exact path="/admin" component={AdminPage}></Route>
      <Route path="*" component={Unauthorised}></Route>
    </Switch>
  );
};

export default AdminRoleRoutes;
