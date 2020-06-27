import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

describe("testing App", () => {
    it("should render App", () => {
        expect(shallow(
            <Provider store={store}>
                <App />
            </Provider>
        )).toMatchSnapshot();
    });
});