import React from "react";
import { Link } from "react-router-dom";

const ProductOverview = ({ category, product }) => {
    const { id, manufacturer, name, price, imageFileName } = product;

    return (
        <div className="ProductOverview">
            <Link to={`/${category}/${id}`}>
                <img src={`images/${imageFileName}`} alt={`${manufacturer} ${name}`} />
                <h3>{manufacturer}</h3>
                <h3>{name}</h3>
                <h3>{price} €</h3>
            </Link>
        </div>
    )
}

export default ProductOverview;