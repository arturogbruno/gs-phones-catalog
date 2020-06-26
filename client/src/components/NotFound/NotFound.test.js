import React from "react";
import { shallow } from "enzyme";
import NotFound from "./NotFound";

describe("testing NotFound component", () => {
    it("should render NotFound component", () => {
        expect(shallow(<NotFound />)).toMatchSnapshot();
    });
});