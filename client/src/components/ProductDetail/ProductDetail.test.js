import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../redux/store";
import ProductDetail from "./ProductDetail";

describe("testing ProductDetail component", () => {
    const match = {
        params: {
            id: "2"
        }
    }
    
    it("should render ProductDetail component", () => {
        expect(shallow(
            <Provider store={store}>
                <ProductDetail match={match} />
            </Provider>
        )).toMatchSnapshot();
    });
});