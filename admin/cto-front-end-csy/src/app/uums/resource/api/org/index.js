/**
 * Created by feichongzheng on 17/9/30.
 */
import {
    findInTree,
    findById,
    findForTreeSelect,
    save,
    update,
    remove,
    updAvailable,
    addMenu,
    findMenu,
    addController,
    findController,
    findAssignedUsers,
    findUnAssignedUsers,
    assignUser,
    unAssignUser,
    findPrivilege,
    forbiddenMenu,
    forbiddenController
} from './api';
import relativePath from './apiRelativePath';

import {
    saveRight,
    updateRight,
    deleteRight,
    addMenuRight,
    addControllerResourceRight,
    assignUserRight,
    unAssignUserRight,
    findPrivilegeRight
} from './right';

export {
    findInTree,
    findById,
    findForTreeSelect,
    save,
    update,
    remove,
    updAvailable,
    addMenu,
    findMenu,
    addController,
    findController,
    findAssignedUsers,
    findUnAssignedUsers,
    assignUser,
    unAssignUser,
    findPrivilege,
    forbiddenMenu,
    forbiddenController,
    saveRight,
    updateRight,
    deleteRight,
    addMenuRight,
    addControllerResourceRight,
    assignUserRight,
    unAssignUserRight,
    findPrivilegeRight,
    relativePath
};
