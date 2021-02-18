import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from '../pages/Cadastro';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
