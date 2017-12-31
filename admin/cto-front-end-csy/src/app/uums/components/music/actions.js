import * as types from './actionTypes';

export const findMusicForPage = (params) => {
    return {
        type: types.FIND_MUSIC_FOR_PAGE,
        params: params
    }
};

export const findMusicForPageFetch = () => ({
    type: types.FIND_MUSIC_FOR_PAGE_FETCH
});

export const findMusicForPageSuccess = (data, params) => {

    return {
        type: types.FIND_MUSIC_FOR_PAGE_SUCCESS,
        data: data,
        params: params
    }
};

export const findMusicForPageError = (err, params) => ({
    type: types.FIND_MUSIC_FOR_PAGE_ERROR,
    err: err,
    params: params
});
