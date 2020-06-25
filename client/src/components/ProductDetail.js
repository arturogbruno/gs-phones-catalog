import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = ({ match }) => {
    const id = +match.params.id;
    const products = useSelector(state => state.products);
    
    if(products.length === 0) {
        return <h1>Loading...</h1>
    }
    
    const selectedProduct = products.find(product => product.id === id);

    if(selectedProduct) {
        const { manufacturer, name, price, imageFileName, description, processor, ram, screen, color } = selectedProduct;

        return (
            <div className="ProductDetail"> 
                <h1>This is the product detail page</h1>
                <Link to="/">🔙 Back</Link>
                <img src={`../images/${imageFileName}`} alt={`${manufacturer} ${name}`} />
                <h3>{manufacturer} {name}</h3>
                <h3>{price} €</h3>
                <p>{description}</p>
                <h5>Main features:</h5>
                <ul>
                    <li>Processor: {processor}</li>
                    <li>RAM: {ram} GB</li>
                    <li>Screen: {screen}</li>
                    <li>Color: {color}</li>
                </ul>
            </div>
        )
    } else {
        return <h1>Not found!</h1>
    }
}

export default ProductDetail;