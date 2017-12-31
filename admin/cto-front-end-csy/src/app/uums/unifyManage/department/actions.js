/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const changeIdForUnifyDepartment = (id) => ({
    type: types.CHANGE_ID_FOR_UNIFY_DEPARTMENT,
    id: id
});

export const changeActiveForUnifyDepartment = (activeKey) => ({
    type: types.CHANGE_ACTIVE_FOR_UNIFY_DEPARTMENT,
    activeKey: activeKey
});

export const findByIdForUnifyDepartment = (id) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_DEPARTMENT,
    id: id
});

export const findByIdForUnifyDepartmentFetch = () => ({
    type: types.FIND_BY_ID_FOR_UNIFY_DEPARTMENT_FETCH,
});

export const findByIdForUnifyDepartmentSuccess = (res) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_DEPARTMENT_SUCCESS,
    res: res
});

export const findByIdForUnifyDepartmentError = (err) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_DEPARTMENT_ERROR,
    err: err
});

export const showUpdatePageForUnifyDepartment = (update) => ({
    type: types.SHOW_UPDATE_PAGE_FOR_UNIFY_DEPARTMENT,
    update: update
});

export const updateForUnifyDepartment = (department) => ({
    type: types.UPDATE_FOR_UNIFY_DEPARTMENT,
    department: department
});

export const updateForUnifyDepartmentFetch = () => ({
    type: types.UPDATE_FOR_UNIFY_DEPARTMENT_FETCH,
});

export const updateForUnifyDepartmentSuccess = (res) => ({
    type: types.UPDATE_FOR_UNIFY_DEPARTMENT_SUCCESS,
    res: res
});

export const updateForUnifyDepartmentError = (err) => ({
    type: types.UPDATE_FOR_UNIFY_DEPARTMENT_ERROR,
    updateErr: err
});