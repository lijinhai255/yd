import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {renderRoutes } from "react-router-config";
import routes from "./Router";

export default function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

       {
         renderRoutes(routes)
       }
      </div>
  );
}
