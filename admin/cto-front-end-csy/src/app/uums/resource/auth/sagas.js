/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {org, department, position, orgRole, user, role, person} from '../api';
import {
    findMenuForAuthFetch, findMenuForAuthSuccess, findMenuForAuthError,
    findControllerForAuthFetch, findControllerForAuthSuccess, findControllerForAuthError,
    expandMenuForAuth, expandControllerForAuth
} from './actions';
import {FIND_MENU_FOR_AUTH, FIND_CONTROLLER_FOR_AUTH} from './actionTypes';
import {FilterType} from '../../constants';

function findMenuForAuth(data) {
    const {dataType, params} = data;
    let promise;
    switch (dataType) {
        case FilterType.ORG:
            promise = org.findMenu(params);
            break;
        case FilterType.DEPARTMENT:
            promise = department.findMenu(params);
            break;
        case FilterType.POSITION:
            promise = position.findMenu(params);
            break;
        case FilterType.ORGROLE:
            promise = orgRole.findMenu(params);
            break;
        case FilterType.USER:
            promise = user.findMenu(params);
            break;
        case FilterType.ROLE:
            promise = role.findMenu(params);
            break;
        case FilterType.PERSON:
            promise = person.findMenu(params);
            break;
        default:
            break;
    }
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function findControllerForAuth(data) {
    const {dataType, params} = data;
    let promise;
    switch (dataType) {
        case FilterType.ORG:
            promise = org.findController(params);
            break;
        case FilterType.DEPARTMENT:
            promise = department.findController(params);
            break;
        case FilterType.POSITION:
            promise = position.findController(params);
            break;
        case FilterType.ORGROLE:
            promise = orgRole.findController(params);
            break;
        case FilterType.USER:
            promise = user.findController(params);
            break;
        case FilterType.ROLE:
            promise = role.findController(params);
            break;
        case FilterType.PERSON:
            promise = person.findController(params);
            break;
        default:
            break;
    }
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchMenuForAuth(data) {
    try {
        yield put(findMenuForAuthFetch());
        const result = yield call(findMenuForAuth, data);
        yield put(findMenuForAuthSuccess(result));
        if (result.success) {
            const data = result.data ? result.data.menuList : [];
            let firstKey = data ? ((data.length === 0) ? null : data[0].nodeId) : null;
            yield put(expandMenuForAuth([firstKey]));
        }
    } catch (e) {
        yield put(findMenuForAuthError(e));
    }
}

function* fetchControllerForAuth(data) {
    try {
        yield put(findControllerForAuthFetch());
        const result = yield call(findControllerForAuth, data);
        yield put(findControllerForAuthSuccess(result));
        if (result.success) {
            const data = result.data ? result.data.controllerList : [];
            let firstKey = data ? ((data.length === 0) ? null : data[0].nodeId) : null;
            yield put(expandControllerForAuth([firstKey]));
        }
    } catch (e) {
        yield put(findControllerForAuthError(e));
    }
}

function* sagas() {
    yield takeLatest(FIND_MENU_FOR_AUTH, fetchMenuForAuth);
    yield takeLatest(FIND_CONTROLLER_FOR_AUTH, fetchControllerForAuth);
}

export default sagas;
