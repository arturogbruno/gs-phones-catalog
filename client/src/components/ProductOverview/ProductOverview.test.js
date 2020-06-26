import React from "react";
import { shallow } from "enzyme";
import ProductOverview from "./ProductOverview";

describe("testing ProductOverview component", () => {
    it("should render ProductOverview component", () => {
        const mockCategory = "phones";
        const mockProduct = {
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
        };

        expect(shallow(<ProductOverview category={mockCategory} product={mockProduct} />)).toMatchSnapshot();
    });
});