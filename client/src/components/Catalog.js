import React from "react";
import ProductOverview from "./ProductOverview";

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
                <h1>Loading...</h1>
            )}
        </div>
    )
}

export default Catalog;