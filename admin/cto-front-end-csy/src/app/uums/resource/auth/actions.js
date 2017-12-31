/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findAppsForAuth = (data, appId) => ({
    type: types.FIND_APPS_FOR_AUTH,
    apps: data,
    appId: appId
});

export const changeAppForAuth = (appId) => ({
    type: types.CHANGE_APP_FOR_AUTH,
    appId: appId
});

export const expandMenuForAuth = (expandedKeys) => ({
    type: types.EXPAND_MENU_FOR_AUTH,
    expandedKeys: expandedKeys
});

export const checkMenuForAuth = (checkedKeys) => ({
    type: types.CHECK_MENU_FOR_AUTH,
    checkedKeys: checkedKeys
});

export const selectMenuForAuth = (selectedKeys) => ({
    type: types.SELECT_MENU_FOR_AUTH,
    selectedKeys: selectedKeys
});

export const findMenuForAuth = (type, params) => ({
    type: types.FIND_MENU_FOR_AUTH,
    dataType: type,
    params: params
});

export const findMenuForAuthFetch = () => ({
    type: types.FIND_MENU_FOR_AUTH_FETCH
});

export const findMenuForAuthSuccess = (res) => ({
    type: types.FIND_MENU_FOR_AUTH_SUCCESS,
    res: res
});

export const findMenuForAuthError = (err) => ({
    type: types.FIND_MENU_FOR_AUTH_ERROR,
    err: err
});

export const expandControllerForAuth = (expandedKeys) => ({
    type: types.EXPAND_CONTROLLER_FOR_AUTH,
    expandedKeys: expandedKeys
});

export const checkControllerForAuth = (checkedKeys) => ({
    type: types.CHECK_CONTROLLER_FOR_AUTH,
    checkedKeys: checkedKeys
});

export const selectControllerForAuth = (selectedKeys) => ({
    type: types.SELECT_CONTROLLER_FOR_AUTH,
    selectedKeys: selectedKeys
});

export const findControllerForAuth = (type, params) => ({
    type: types.FIND_CONTROLLER_FOR_AUTH,
    dataType: type,
    params: params
});

export const findControllerForAuthFetch = () => ({
    type: types.FIND_CONTROLLER_FOR_AUTH_FETCH
});

export const findControllerForAuthSuccess = (res) => ({
    type: types.FIND_CONTROLLER_FOR_AUTH_SUCCESS,
    res: res
});

export const findControllerForAuthError = (err) => ({
    type: types.FIND_CONTROLLER_FOR_AUTH_ERROR,
    err: err
});
