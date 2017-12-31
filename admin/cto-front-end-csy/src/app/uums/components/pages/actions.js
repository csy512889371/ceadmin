import * as type from './actionTypes';

export const findData = (data) => {
    let {funcName, stateName} = data;
    return {
        type: type.COMP_LOGIN_FIND_DATA,
        funcName,
        stateName
    }
}

export const requestData = category => ({
    type: type.COMP_LOGIN_REQUEST_DATA,
    category
});

export const receiveData = (data, category) => ({
    type: type.COMP_LOGIN_RECEIVE_DATA,
    data,
    category
});



