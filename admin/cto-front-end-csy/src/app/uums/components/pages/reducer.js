import * as types from './actionTypes';

export default (state = {}, action) => {
    const {type} = action;
    switch (type) {
        case types.COMP_LOGIN_REQUEST_DATA: {
            return {
                ...state, type: type, isFetching: true
            }
        }
        case types.COMP_LOGIN_RECEIVE_DATA:
            return {...state, type: type,isFetching: false, data: action.data};
        default:
            return {...state};
    }
}
