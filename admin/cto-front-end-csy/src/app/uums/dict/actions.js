/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findDictForPage = (params) => ({
    type: types.FIND_DICT_FOR_PAGE,
    params: params
});

export const findDictForPageFetch = () => ({
    type: types.FIND_DICT_FOR_PAGE_FETCH
});

export const findDictForPageSuccess = (data, params) => ({
    type: types.FIND_DICT_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findDictForPageError = (err, params) => ({
    type: types.FIND_DICT_FOR_PAGE_ERROR,
    err: err,
    params: params
});