import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "./redux/actions";
import PhonesServices from "./services/PhonesServices";
import "./App.css";

function App() {
    const phonesServices = new PhonesServices();

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        const getPhonesData = async () => {
            const phones = await phonesServices.getAllPhones();
            dispatch(addProducts(phones));
        }
        getPhonesData();
    }, [])

    console.log(products);

    return (
        <div className="App">
            <h1>This is the Homepage</h1>
            {products.length !== 0 ? (
                <p>{products[0].name}</p>
            ) : (
                <h4>Loading...</h4>
            )}
        </div>
    )
}

export default App;