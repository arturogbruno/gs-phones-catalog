import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("testing Footer component", () => {
    it("should render Footer component", () => {
        expect(shallow(<Footer />)).toMatchSnapshot();
    });
});