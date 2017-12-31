import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../../resource';
import {findMusicForPageFetch, findMusicForPageSuccess, findMusicForPageError} from './actions';
import {FIND_MUSIC_FOR_PAGE} from './actionTypes';

function musicPage(params) {
    const promise = api.music.findForPage(params);
    return promise.then(res => {
        return res.json();
    }).then(response => {
        return response.song_list;
    }).catch( (err) => {
        throw err;
    });
}

function* fetchMusicPage(data) {
    const params = data.params;
    try {
        yield put(findMusicForPageFetch());
        const result = yield call(musicPage, params);
        yield put(findMusicForPageSuccess(result, params));
    } catch (e) {
        yield put(findMusicForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_MUSIC_FOR_PAGE, fetchMusicPage);
}

export default sagas;
