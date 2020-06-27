import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ProductDetail from "./ProductDetail";

describe("testing ProductDetail component", () => {
    let wrapper;
    let store;
    
    beforeEach(() => {
        const match = {
            params: {
                id: "2"
            }
        };

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
                    <ProductDetail match={match} />
                </BrowserRouter>
            </Provider>
        );
    });

    it("should render ProductDetail component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render ProductDetail and productData elements if product is found", () => {
        expect(wrapper.find("ProductDetail").length).toEqual(1);
        expect(wrapper.find(".productData").exists()).toBe(true);
    });

    it("should render NotFound component if product is not found", () => {
        const match = {
            params: {
                id: "13"
            }
        };
        
        wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <ProductDetail match={match} />
                </BrowserRouter>
            </Provider>
        );

        expect(wrapper.find("NotFound").length).toEqual(1);
    });
});