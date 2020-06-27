import { addProducts } from "./actions";

describe("testing actions", () => {
    it("should create an action to add products", () => {
        const mockPayload = [
            {
                id: 1,
                name: "iPhone 7"
            },
            {
                id: 2,
                name: "Huawei P30 Pro"
            }
        ];

        expect(addProducts(mockPayload)).toEqual({ type: "ADD_PRODUCTS", products: mockPayload });
    });
});