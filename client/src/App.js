import React from "react";
import { Switch, Route } from "react-router-dom";
import Catalog from "./components/Catalog";
import "./App.css";

function App() {
    const category = "phones";

    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={() => <Catalog category={category} />} />
            </Switch>
        </div>
    )
}

export default App;