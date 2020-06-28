import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "./redux/actions";
import axios from "axios";
import Catalog from "./components/Catalog/Catalog";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import "./App.scss";

function App() {
    const category = "phones";

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        const getProductsData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/phones`);
            dispatch(addProducts(response.data));
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