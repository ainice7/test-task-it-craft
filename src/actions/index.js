import { SET_PRODUCTS, ADD_PRODUCT, LOG_IN, DELETE_PRODUCT } from '../constances';
import { isLoading, loadingFail } from './loading';
import productsBase from '../base/products';

export const logIn = (userName) => ({ type: LOG_IN, payload: userName });

export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products  });

export const getProducts = () => {
    return dispatch => {
        dispatch(isLoading(true));
        new Promise(function(resolve, reject) {
            setTimeout(function(){
                resolve(productsBase);
            }, 300)
        }).then( (data) => {
            dispatch(setProducts(data));
        })
        .catch(error => {
            dispatch(loadingFail(true));
            console.error(error)});
    }
};

export const addToCart = (product) => ({ type: ADD_PRODUCT, payload: product });

export const deleteFromCart = (product) => ({ type: DELETE_PRODUCT, payload: product });