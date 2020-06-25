import React from "react";

const Navbar = ({ category }) => {
    return (
        <div className="Navbar">
            <img src="https://images.ctfassets.net/5gv1edeicqfs/2VJg7fkuNaAUqUawUuckk4/66298626f95b05550594405b2e5d39b9/gs-logo-inv.png" alt="GS logo" />
            <h3>{category.charAt(0).toUpperCase().concat(category.slice(1))} Catalog</h3>
        </div>
    )
}

export default Navbar;