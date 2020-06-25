import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "./redux/actions";
import PhonesServices from "./services/PhonesServices";
import Catalog from "./components/Catalog";
import ProductDetail from "./components/ProductDetail";
import "./App.css";

function App() {
    const category = "phones";

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
        <div className="App">
            <Switch>
                <Route exact path="/" render={() => <Catalog category={category} products={products} />} />
                <Route exact path={`/${category}/:id`} component={ProductDetail} /> 
            </Switch>
        </div>
    )
}

export default App;