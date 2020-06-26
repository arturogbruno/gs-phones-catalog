import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";

describe("testing Navbar component", () => {
    it("should render Navbar component", () => {
        expect(shallow(<Navbar category="test" />)).toMatchSnapshot();
    });
})
