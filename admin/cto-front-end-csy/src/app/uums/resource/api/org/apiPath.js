/**
 * Created by feichongzheng on 17/9/28.
 */
import {uumsServer} from '../apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    findInTree: uumsServer + apiRelativePath.findInTree,
    findForTreeSelect: uumsServer + apiRelativePath.findForTreeSelect,
    findById: uumsServer + apiRelativePath.findById,
    save: uumsServer + apiRelativePath.save,
    update: uumsServer + apiRelativePath.update,
    remove: uumsServer + apiRelativePath.remove,
    updAvailable: uumsServer + apiRelativePath.updAvailable,
    assignUser: uumsServer + apiRelativePath.assignUser,
    unAssignUser: uumsServer + apiRelativePath.unAssignUser,
    findAssignedUsers: uumsServer + apiRelativePath.findAssignedUsers,
    findUnAssignedUsers: uumsServer + apiRelativePath.findUnAssignedUsers,
    auth: {
        findMenu: uumsServer + apiRelativePath.auth.findMenu,
        addMenu: uumsServer + apiRelativePath.auth.addMenu,
        forbiddenMenu: uumsServer + apiRelativePath.auth.forbiddenMenu,
        findController: uumsServer + apiRelativePath.auth.findController,
        addController: uumsServer + apiRelativePath.auth.addController,
        forbiddenController: uumsServer + apiRelativePath.auth.forbiddenController,
        findAuthedResource: uumsServer + apiRelativePath.auth.findAuthedResource
    }
};

export default apiPath;
