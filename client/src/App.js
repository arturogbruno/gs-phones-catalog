import React, { useEffect } from "react";
import PhonesServices from "./services/PhonesServices";
import "./App.css";

function App() {
    const phonesServices = new PhonesServices();

    useEffect(() => {
        const getPhonesData = async () => {
            const phones = await phonesServices.getAllPhones();
            console.log(phones);
        }
        getPhonesData();
    }, [])


    return (
        <div className="App">
            <h1>This is the Homepage</h1>
        </div>
    )
}

export default App;