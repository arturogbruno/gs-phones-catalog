export const addProducts = payload => {
    return {
        type: "ADD_PRODUCTS",
        products: payload
    }
}