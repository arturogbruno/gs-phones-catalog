import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../redux/store";
import ProductDetail from "./ProductDetail";

describe("testing ProductDetail component", () => {
    let wrapper;
    beforeEach(() => {
        const match = {
            params: {
                id: "2"
            }
        };

        wrapper = shallow(
            <Provider store={store}>
                <ProductDetail match={match} />
            </Provider>
            );
    });


    it("should render ProductDetail component", () => {
        expect(wrapper).toMatchSnapshot();
    });
});