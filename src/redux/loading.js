import { IS_LOADING, LOADING_FAIL, SET_PRODUCTS } from '../constances';

const initialState = {
    isLoading: false,
    loadingFail: false
};

export const loading = (state = initialState, action ) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case SET_PRODUCTS:
            return {
                ...state,
                isLoading: false 
            }
        case LOADING_FAIL:
            return {
                ...state,
                isLoading: false,
                loadingFail: true,
            };
        default:
            return state;
    }
}