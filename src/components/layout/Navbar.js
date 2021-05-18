import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div clasName="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">User</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link className="nav-link"  exact  to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" exact to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" exact to="/contact">Contact</Link>
                        </li>
                        
                    </ul>
                    <Link className="btn btn-outline-light" exact to="users/adduser">AddUser</Link>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;