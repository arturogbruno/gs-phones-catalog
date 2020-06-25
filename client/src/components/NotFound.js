import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="NotFound">
            <img src="/images/notfound.png" alt="not found"/>
            <h1>Ups... we can't find the page you were looking for.</h1>
            <Link to="/">Take me back!</Link>
        </div>
    )
}

export default NotFound;