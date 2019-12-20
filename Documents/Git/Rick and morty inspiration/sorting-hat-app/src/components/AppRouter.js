import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Character from "./Character";
import Spells from "./Spells";
function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Character</Link>
            </li>
            <li>
              <Link to="/spells">Spells</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/spells" component={Spells} />
          <Route path="/" component={Character} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
