import * as http from '../axios/index';
import {call, put, takeLatest} from 'redux-saga/effects';
import {requestData, receiveData} from './actions';
import {COMP_LOGIN_FIND_DATA} from './actionTypes';

export const fetchData = ({funcName, params}) => {
    return http[funcName](params).then(res => {
        return res;
    });
};

function* fetchLoginInfo(data) {
    try {
        let {stateName} = data;
        yield put(requestData());
        const result = yield call(fetchData, data);
        yield put(receiveData(result, stateName));
    } catch (e) {
        console.log(e);
    }
}

function* sagas() {
    yield takeLatest(COMP_LOGIN_FIND_DATA, fetchLoginInfo);
}

export default sagas;



