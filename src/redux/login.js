import { LOG_IN } from '../constances';

const initialState = {
    userName: ''
}

export const logIn = (state = initialState, action) => {
    if(action.type === LOG_IN) {
        return {
            userName: action.payload
        }
    }
    return state;
}