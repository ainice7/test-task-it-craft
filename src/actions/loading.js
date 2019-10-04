import {IS_LOADING, LOADING_FAIL} from '../constances';

export const isLoading = (isLoading) => ({ type: IS_LOADING, isLoading });
export const loadingFail = (loadingFail) => ({ type: LOADING_FAIL, payload: loadingFail });