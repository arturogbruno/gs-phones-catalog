import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/actions";
import PhonesServices from "../services/PhonesServices";
import ProductOverview from "./ProductOverview";

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