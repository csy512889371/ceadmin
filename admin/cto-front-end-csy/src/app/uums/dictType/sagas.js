/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findDictTypeForPageFetch, findDictTypeForPageSuccess, findDictTypeForPageError} from './actions';
import {FIND_DICTTYPE_FOR_PAGE} from './actionTypes';

function dictTypePage(params) {
    const promise = api.dictType.findForPage(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchDictTypePage(data) {
    const params = data.params;
    try {
        yield put(findDictTypeForPageFetch());
        const result = yield call(dictTypePage, params);
        yield put(findDictTypeForPageSuccess(result, params));
    } catch (e) {
        yield put(findDictTypeForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_DICTTYPE_FOR_PAGE, fetchDictTypePage);
}

export default sagas;