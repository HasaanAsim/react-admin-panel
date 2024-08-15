import React from "react";
import{Nav} from "react-bootstrap";
import logo from "../images/app_logo.png";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar=()=>{
    return(
    <div className="sidebar">
        <div className="logo border-bottom border-top">
        <img src={logo}/>
        </div>
        <Nav className="flex-column">
            <Nav.Link as={Link} className="text-white" to="/Page">Dashboard</Nav.Link>
            <Nav.Link as={Link} className="text-white" to="/Applications">Applications</Nav.Link>
            <Nav.Link as={Link} className="text-white" to="/userDetail">Users</Nav.Link>
            <Nav.Link as={Link} className="text-white" to="/events">Events</Nav.Link>
            <Nav.Link as={Link} className="text-white" to="/">Report Events</Nav.Link>
      </Nav>
      <div className="logout">
        <Link to="/">
        <button className="btn btn-light btn-sm">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
