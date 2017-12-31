/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findDepartmentForPageFetch, findDepartmentForPageSuccess, findDepartmentForPageError} from './actions';
import {FIND_DEPARTMENT_FOR_PAGE} from './actionTypes';

function departmentPage(params) {
    const promise = api.department.findForPage(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchDepartmentPage(data) {
    const params = data.params;
    try {
        yield put(findDepartmentForPageFetch());
        const result = yield call(departmentPage, params);
        yield put(findDepartmentForPageSuccess(result, params));
    } catch (e) {
        yield put(findDepartmentForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_DEPARTMENT_FOR_PAGE, fetchDepartmentPage);
}

export default sagas;