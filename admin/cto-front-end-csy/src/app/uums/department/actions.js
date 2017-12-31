/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findDepartmentForPage = (params) => ({
    type: types.FIND_DEPARTMENT_FOR_PAGE,
    params: params
});

export const findDepartmentForPageFetch = () => ({
    type: types.FIND_DEPARTMENT_FOR_PAGE_FETCH
});

export const findDepartmentForPageSuccess = (data, params) => ({
    type: types.FIND_DEPARTMENT_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findDepartmentForPageError = (err, params) => ({
    type: types.FIND_DEPARTMENT_FOR_PAGE_ERROR,
    err: err,
    params: params
});