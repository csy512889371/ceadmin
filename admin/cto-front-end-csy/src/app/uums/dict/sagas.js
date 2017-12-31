/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findDictForPageFetch, findDictForPageSuccess, findDictForPageError} from './actions';
import {FIND_DICT_FOR_PAGE} from './actionTypes';

function dictPage(params) {
    const promise = api.dict.findForPage(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchDictPage(data) {
    const params = data.params;
    try {
        yield put(findDictForPageFetch());
        const result = yield call(dictPage, params);
        yield put(findDictForPageSuccess(result, params));
    } catch (e) {
        yield put(findDictForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_DICT_FOR_PAGE, fetchDictPage);
}

export default sagas;