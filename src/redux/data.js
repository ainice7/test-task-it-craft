import { SET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from '../constances';

const initialState = {
    products: [],
    addedItems: []
};

export const data = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: 
            return{
                ...state,
                products: action.payload
            };
        case ADD_PRODUCT:
            const requestedItem = state.products.find((item) => item.id === action.payload.id);

            return {
                ...state,
                addedItems: [...state.addedItems, requestedItem]
            }
        case DELETE_PRODUCT:
            const filteredArray = state.addedItems.filter((item) => item.id !== action.payload.id);

            return {
                ...state,
                addedItems: filteredArray
            }
        default:
            return state;
    }
}