import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/actions";
import PhonesServices from "../services/PhonesServices";

const Catalog = ({ category }) => {
    const phonesServices = new PhonesServices();

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        const getProductsData = async () => {
            const phones = await phonesServices.getAllPhones();
            dispatch(addProducts(phones));
        }
        getProductsData();
    }, [])

    console.log(products);

    return (
        <div className="Catalog">
            <h1>{`This is the ${category} catalog`}</h1>
            {products.map(product => (
                <li key={product.id}>{product.manufacturer} {product.name}</li>
            ))}
        </div>
    )
}

export default Catalog;