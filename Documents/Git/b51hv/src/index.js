// dynamic routes
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";

const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
];

const fetchUser = id => Promise.resolve(users.find(user => user.id == id));

const User = props => {
  const { id } = props.match.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(id).then(user => setUser(user));
  }, [id]);

  if (!user) return <div>Fetching user...</div>;
  return <div>The name is {user.name}</div>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/users/1">User 1</Link>
        <Link to="/users/2">User 2</Link>
        <Link to="/users/3">User 3</Link>
        <Route path="/users/:id" component={User} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
