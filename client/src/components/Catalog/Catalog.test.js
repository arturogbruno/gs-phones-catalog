import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import Catalog from "./Catalog";

describe("testing Catalog component", () => {
    const mockCategory = "phones";
    let mockProducts = [
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

    let wrapper = mount(
        <BrowserRouter>
            <Catalog category={mockCategory} products={mockProducts} />
        </BrowserRouter>
    );

    it("should render Catalog component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render ProductOverview elements if it receives a non-empty products array", () => {
        expect(wrapper.find("ProductOverview").length).toBeGreaterThan(0);
    });
});