import {combineReducers} from 'redux';

import { data } from './data';
import { loading } from './loading';
import { logIn } from './login';

export const rootReducer = combineReducers({
    loading,
    data,
    logIn
});