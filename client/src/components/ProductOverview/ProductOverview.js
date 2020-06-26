import React from "react";
import { Link } from "react-router-dom";
import "./ProductOverview.scss";

const ProductOverview = ({ category, product }) => {
    const { id, manufacturer, name, price, imageFileName } = product;

    return (
        <div className="ProductOverview">
            <Link to={`/${category}/${id}`}>
                <img src={`images/${imageFileName}`} alt={`${manufacturer} ${name}`} />
                <div className="productMainInfo">
                    <div className="makerModel">
                        <h2>{manufacturer}</h2>
                        <h2>{name}</h2>
                    </div>
                    <h2 className="price">{price} €</h2>
                </div>
            </Link>
        </div>
    )
}

export default ProductOverview;