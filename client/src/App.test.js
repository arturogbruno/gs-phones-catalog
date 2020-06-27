import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "./App";

describe("testing App", () => {
    let wrapper;
    let store;
    
    beforeEach(() => {
        const mockStore = configureMockStore();

        store = mockStore({
            products: [
                { 
                    id: 2,
                    name: "iPhone 7"
                }
            ]
        });

        wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );
    });

    it("should render App", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render a Navbar component", () => {
        expect(wrapper.find("Navbar").length).toEqual(1);
    });
});