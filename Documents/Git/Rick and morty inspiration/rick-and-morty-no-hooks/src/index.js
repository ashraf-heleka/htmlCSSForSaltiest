import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Home from './home.js'
import Char from './char.js'
import 'tachyons'

const App = ({ children }) => (
  <div className="avenir">
    <nav class="pa3 pa4-ns">
      <h1 class="link dim black b f6 f5-ns dib mr3">Rick and Morty</h1>
      <Link class="link dim gray f6 f5-ns dib mr3" to="/">Home</Link>
    </nav>
    <main class="mw5 mw9-ns center pa3 ph5-ns">{children}</main>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Router>
  <App path="/">
    <Home path="/" />
    <Char path="char/:id" />
  </App>
</Router>, rootElement);
