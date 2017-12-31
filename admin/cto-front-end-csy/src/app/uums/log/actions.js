/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findLogForPage = (params) => ({
    type: types.FIND_LOG_FOR_PAGE,
    params: params
});

export const findLogForPageFetch = () => ({
    type: types.FIND_LOG_FOR_PAGE_FETCH
});

export const findLogForPageSuccess = (data, params) => ({
    type: types.FIND_LOG_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findLogForPageError = (err, params) => ({
    type: types.FIND_LOG_FOR_PAGE_ERROR,
    err: err,
    params: params
});