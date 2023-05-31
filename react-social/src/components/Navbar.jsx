import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { SidebarData } from "./SlidebarData";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false
    };
  }

  showSidebar = () => {
    this.setState(prevState => ({
      sidebar: !prevState.sidebar
    }));
  }

  render() {
    const { sidebar } = this.state;

    return (
      <React.Fragment>
        <IconContext.Provider value={{ color: "#FFF" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={this.showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={this.showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
        <div className="app-options">
          <nav className="app-nav">
            {this.props.authenticated ? (
              <ul>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                  <a onClick={this.props.onLogout}>Logout</a>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Signup</NavLink>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
