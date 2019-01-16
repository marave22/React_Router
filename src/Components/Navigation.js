import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav  className="navbar navbar-expand-md navbar-light bg-light">
                <NavLink className="mr-4" to="/">Home</NavLink>
                <NavLink className="mr-4" to="/about">About</NavLink>
                <NavLink className="mr-4" to="/contact">Contact</NavLink>
            </nav>
        </div>
    )
};

export default Navigation;