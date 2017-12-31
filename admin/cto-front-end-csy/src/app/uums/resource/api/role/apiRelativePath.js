/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findForPage: '/api/role/findForPage.do',
    findById: '/api/role/findById.do',
    save: '/api/role/add.do',
    update: '/api/role/update.do',
    updAvailable: '/api/role/updAvailable.do',
    remove: '/api/role/delete.do',
    assignUser: '/api/role/assignUser.do',
    unAssignUser: '/api/role/unassignUser.do',
    findAssignedUsers: '/api/role/findAssignedUsers.do',
    findUnAssignedUsers: '/api/role/findUnassignedUsers.do',
    auth: {
        findMenu: '/api/role/auth/findMenu.do',
        addMenu: '/api/role/auth/addMenu.do',
        findController: '/api/role/auth/findController.do',
        addController: '/api/role/auth/addControllerResource.do',
        findAuthedResource: '/api/role/auth/findAuthedResource.do',
        forbiddenMenu: '/api/role/auth/forbiddenMenu.do',
        forbiddenController: '/api/role/auth/forbiddenController.do'
    }
};

export default apiRelativePath;
