import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ category }) => {
    return (
        <div className="Navbar">
            <Link to="/">
                <img className="logo" src="https://images.ctfassets.net/5gv1edeicqfs/48EM0LU3Z6gWkQCcCaeoq2/704ea273b5d50d09ff450a5ceaa74631/guidesmiths-logo.png" alt="GS logo" />
                <h2>{category.charAt(0).toUpperCase().concat(category.slice(1))} Catalog</h2>
            </Link>
        </div>
    )
}

export default Navbar;