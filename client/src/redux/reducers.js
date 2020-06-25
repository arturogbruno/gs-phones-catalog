const initialState = {
    products: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_PRODUCTS":
            return { products: action.products };
        default:
            return state;
    }
}