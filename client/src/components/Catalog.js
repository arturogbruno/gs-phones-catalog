import React from "react";
import ProductOverview from "./ProductOverview";
import CircleLoader from "react-spinners/CircleLoader";

const Catalog = ({ category, products }) => {
    return (
        <div className="Catalog">
            {products.length !== 0 ? (
                <>
                    <h1>{`This is the ${category} catalog`}</h1>
                    {products.map(product => (
                        <ProductOverview key={product.id} category={category} product={product} />
                    ))}
                </>
            ) : (
                <CircleLoader 
                    color={"#00b091"}
                    size={50}
                />
            )}
        </div>
    )
}

export default Catalog;