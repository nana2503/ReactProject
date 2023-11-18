import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="top-nav">
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
          <NavLink to="/todo" activeClassName="active">
            Todos List
          </NavLink>
          <NavLink to="/Form" activeClassName="active">
            Form
          </NavLink>
          <NavLink to="user" activeClassName="active">
            User
          </NavLink>
        </div>

        {/* <ul>
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/todo">Todo</a>
          </li>
          <li>
            <a href="/Form">Form</a>
          </li>
        </ul> */}
      </>
    );
  }
}
export default Navbar;
