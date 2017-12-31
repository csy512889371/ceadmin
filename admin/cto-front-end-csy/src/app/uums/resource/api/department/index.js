/**
 * Created by feichongzheng on 17/9/30.
 */
import {
    findForPage, findById, findByOrgForSelect, save, update, remove,
    updAvailable, assignUser, unAssignUser,
    forbiddenMenu, forbiddenController,
    addMenu, findMenu, addController, findController,
    findPrivilege, findAssignedUsers, findUnAssignedUsers
} from './api';
import {saveRight, updateRight, deleteRight, addMenuRight, addControllerResourceRight, assignUserRight, unAssignUserRight, findPrivilegeRight} from './right';
import relativePath from './apiRelativePath';

export {
    findForPage, findById, findByOrgForSelect, save, update, remove, updAvailable, assignUser, unAssignUser,
    addMenu, findMenu, addController, findController, findPrivilege, findAssignedUsers, findUnAssignedUsers,
    forbiddenMenu, forbiddenController,
    saveRight, updateRight, deleteRight, addMenuRight, addControllerResourceRight, assignUserRight, unAssignUserRight, findPrivilegeRight,
    relativePath
};