import React from "react";
import { shallow } from "enzyme";
import Catalog from "./Catalog";

describe("testing Catalog component", () => {
    const mockCategory = "phones";
    const mockProducts = [
        {
            "id": 2,
            "name": "Honor 10",
            "manufacturer": "Huawei",
            "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
            "color": "blue",
            "price": 399,
            "imageFileName": "Honor_10.png",
            "screen": "5,84 inch Full-HD",
            "processor": "Kirin 970",
            "ram": 6
        }
    ];

    it("should render Catalog component", () => {
        expect(shallow(<Catalog category={mockCategory} products={mockProducts} />)).toMatchSnapshot();
    });
});