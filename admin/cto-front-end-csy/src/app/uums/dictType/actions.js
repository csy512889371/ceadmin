/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findDictTypeForPage = (params) => ({
    type: types.FIND_DICTTYPE_FOR_PAGE,
    params: params
});

export const findDictTypeForPageFetch = () => ({
    type: types.FIND_DICTTYPE_FOR_PAGE_FETCH
});

export const findDictTypeForPageSuccess = (data, params) => ({
    type: types.FIND_DICTTYPE_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findDictTypeForPageError = (err, params) => ({
    type: types.FIND_DICTTYPE_FOR_PAGE_ERROR,
    err: err,
    params: params
});