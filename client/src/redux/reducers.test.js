import { reducer } from "./reducers";
import { addProducts } from "./actions";

describe("testing reducer function", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({ products: [] });
    });

    it("should return the updated state when ADD_PRODUCTS action is dispatched", () => {
        const mockProducts = [
            {
                id: 1,
                name: "iPhone 7"
            },
            {
                id: 2,
                name: "Huawei P30 Pro"
            }
        ];

        expect(reducer([], addProducts(mockProducts))).toEqual({ products: mockProducts });
    });
});
