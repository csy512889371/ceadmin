/**
 * Created by feichongzheng on 17/9/30.
 */
import {
    findForPage, findById, findByOrgAndDepartmentForSelect, save, update, remove,
    updAvailable, assignUser, unAssignUser,
    addMenu, findMenu, addController, findController,
    forbiddenMenu, forbiddenController,
    findPrivilege, findAssignedUsers, findUnAssignedUsers
} from './api';
import {saveRight, updateRight, deleteRight, addMenuRight, addControllerResourceRight, assignUserRight, unAssignUserRight, findPrivilegeRight} from './right';
import relativePath from './apiRelativePath';

export {
    findForPage, findById, findByOrgAndDepartmentForSelect, save, update, remove, updAvailable, assignUser, unAssignUser,
    addMenu, findMenu, addController, findController, findPrivilege, findAssignedUsers, findUnAssignedUsers,
    forbiddenMenu, forbiddenController,
    saveRight, updateRight, deleteRight, addMenuRight, addControllerResourceRight, assignUserRight, unAssignUserRight, findPrivilegeRight,
    relativePath
};