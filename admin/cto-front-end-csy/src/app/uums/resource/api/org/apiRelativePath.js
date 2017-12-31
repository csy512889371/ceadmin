/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findInTree: '/api/org/findInTree.do',
    findForTreeSelect: '/api/org/findForTreeSelect.do',
    findById: '/api/org/findById.do',
    save: '/api/org/add.do',
    update: '/api/org/update.do',
    remove: '/api/org/delete.do',
    updAvailable: '/api/org/updAvailable.do',
    assignUser: '/api/org/assignUser.do',
    unAssignUser: '/api/org/unassignUser.do',
    findAssignedUsers: '/api/org/findAssignedUsers.do',
    findUnAssignedUsers: '/api/org/findUnassignedUsers.do',
    auth: {
        findMenu: '/api/org/auth/findMenu.do',
        addMenu: '/api/org/auth/addMenu.do',
        forbiddenMenu: '/api/org/auth/forbiddenMenu.do',
        findController: '/api/org/auth/findController.do',
        addController: '/api/org/auth/addControllerResource.do',
        forbiddenController: '/api/org/auth/forbiddenController.do',
        findAuthedResource: '/api/org/auth/findAuthedResource.do'
    }
};

export default apiRelativePath;
