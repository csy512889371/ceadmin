/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findLogForPageFetch, findLogForPageSuccess, findLogForPageError} from './actions';
import {FIND_LOG_FOR_PAGE} from './actionTypes';

function logPage(params) {
    const promise = api.log.findForPage(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchLogPage(data) {
    const params = data.params;
    try {
        yield put(findLogForPageFetch());
        const result = yield call(logPage, params);
        yield put(findLogForPageSuccess(result, params));
    } catch (e) {
        yield put(findLogForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_LOG_FOR_PAGE, fetchLogPage);
}

export default sagas;