import { Switch, Route } from "react-router-dom";
import "./App.css";
import AuthorisedRoute from "./Router/Authorised/AuthorisedRoute";
import Unauthorised from "./Pages/401";
import RoleRoutes from "./Router/Authorised/RoleRoutes/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/401" component={Unauthorised} />
        <AuthorisedRoute path="/" component={RoleRoutes}></AuthorisedRoute>
      </Switch>
    </div>
  );
}

export default App;
