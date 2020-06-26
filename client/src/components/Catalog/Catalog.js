import React from "react";
import ProductOverview from "../ProductOverview/ProductOverview";
import CircleLoader from "react-spinners/CircleLoader";
import "./Catalog.scss";

const Catalog = ({ category, products }) => {
    return (
        <div className="Catalog">
            {products.length !== 0 ? (
                <>
                    <header>
                        <h1>{`Welcome to the smallest ${category} catalog`}</h1>
                        <h3>We have narrowed the search for you to make your choice easier!</h3>
                    </header>
                    {products.map(product => (
                        <ProductOverview key={product.id} category={category} product={product} />
                    ))}
                </>
            ) : (
                <CircleLoader 
                    color={"#fff"}
                    size={50}
                />
            )}
        </div>
    )
}

export default Catalog;