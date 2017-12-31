/**
 * Created by feichongzheng on 17/9/30.
 */
import {
    findForPage, findById, save, remove, update,
    addMenu, findMenu, addController, findController,
    forbiddenMenu, forbiddenController,
    findPrivilege
} from './api';
import {
    saveRight, addMenuRight, addControllerResourceRight,
    findPrivilegeRight
} from './right';
import relativePath from './apiRelativePath';

export {
    findForPage, findById, save, remove, update,
    addMenu, findMenu, addController, findController, findPrivilege,
    forbiddenMenu, forbiddenController,
    saveRight, addMenuRight, addControllerResourceRight,
    findPrivilegeRight,
    relativePath
};