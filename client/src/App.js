import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "./redux/actions";
import PhonesServices from "./services/PhonesServices";
import Catalog from "./components/Catalog/Catalog";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import "./App.scss";

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

    return (
        <div className="App">
            <Navbar category={category} />
            <Switch>
                <Route exact path="/" render={() => <Catalog category={category} products={products} />} />
                <Route exact path={`/${category}/:id`} component={ProductDetail} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;