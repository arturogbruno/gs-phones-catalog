import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CircleLoader from "react-spinners/CircleLoader";
import NotFound from "../NotFound/NotFound";
import "./ProductDetail.scss";

const ProductDetail = ({ match }) => {
    const id = +match.params.id;
    const products = useSelector(state => state.products);
    
    if(products.length === 0) {
        return (
            <CircleLoader 
                color={"#fff"}
                size={50}
            />
        )
    }
    
    const searchProduct = products => products.find(product => product.id === id);
    const foundProduct = searchProduct(products);

    if(foundProduct) {
        const { manufacturer, name, price, imageFileName, description, processor, ram, screen, color } = foundProduct;

        return (
            <div className="ProductDetail">
                <section className="productData">
                    <div className="productImage">
                        <img src={`../images/${imageFileName}`} alt={`${manufacturer} ${name}`} />
                    </div>
                    <div className="productInfo">
                        <div className="productMainInfo">
                            <h2>{manufacturer} {name}</h2>
                            <h2 className="price">{price} €</h2>
                        </div>
                        <div className="productSpecs">
                            <h4>Main features:</h4>
                            <ul>
                                <li>Processor: {processor}</li>
                                <li>RAM: {ram} GB</li>
                                <li>Screen: {screen}</li>
                                <li>Color: {color}</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="productDescription">
                    <h4>Description:</h4>
                    <p>{description}</p>
                    <Link to="/">Back</Link>
                </section>
            </div>
        )
    } else {
        return <NotFound />
    }
}

export default ProductDetail;