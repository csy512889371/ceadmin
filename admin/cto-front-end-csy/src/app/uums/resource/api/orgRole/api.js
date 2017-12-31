/**
 * Created by feichongzheng on 17/9/28.
 */
import {request} from '../../../../resource';
import apiPath from './apiPath';

const findForPage = (data) => request.post(apiPath.findForPage, data);
const findById = (data) => request.post(apiPath.findById, data);
const save = (data) => request.post(apiPath.save, data);
const update = (data) => request.post(apiPath.update, data);
const updAvailable = (data) => request.post(apiPath.updAvailable, data);
const remove = (data) => request.post(apiPath.remove, data);
const assignUser = (data) => request.post(apiPath.assignUser, data);
const unAssignUser = (data) => request.post(apiPath.unAssignUser, data);
const findMenu = (data) => request.post(apiPath.auth.findMenu, data);
const findAssignedUsers = (data) => request.post(apiPath.findAssignedUsers, data);
const findUnAssignedUsers = (data) => request.post(apiPath.findUnAssignedUsers, data);
const addMenu = (data) => request.post(apiPath.auth.addMenu, data);
const findController = (data) => request.post(apiPath.auth.findController, data);
const addController = (data) => request.post(apiPath.auth.addController, data);
const findPrivilege = (data) => request.post(apiPath.auth.findAuthedResource, data);
const forbiddenMenu = (data) => request.post(apiPath.auth.forbiddenMenu, data);
const forbiddenController = (data) => request.post(apiPath.auth.forbiddenController, data);

export {
    findForPage, findById, save, update, remove, updAvailable, assignUser, unAssignUser,
    forbiddenMenu, forbiddenController,
    addMenu, findMenu, addController, findController, findPrivilege, findAssignedUsers, findUnAssignedUsers
};



