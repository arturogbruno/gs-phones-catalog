import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "./redux/actions";
import PhonesServices from "./services/PhonesServices";
import Catalog from "./components/Catalog";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
            <Navbar category={category} />
            <Switch>
                <Route exact path="/" render={() => <Catalog category={category} products={products} />} />
                <Route exact path={`/${category}/:id`} component={ProductDetail} /> 
            </Switch>
            <Footer />
        </div>
    )
}

export default App;