/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findForPage: '/api/orgRole/findForPage.do',
    findById: '/api/orgRole/findById.do',
    save: '/api/orgRole/add.do',
    update: '/api/orgRole/update.do',
    updAvailable: '/api/orgRole/updAvailable.do',
    remove: '/api/orgRole/delete.do',
    assignUser: '/api/orgRole/assignUser.do',
    unAssignUser: '/api/orgRole/unassignUser.do',
    findAssignedUsers: '/api/orgRole/findAssignedUsers.do',
    findUnAssignedUsers: '/api/orgRole/findUnassignedUsers.do',
    auth: {
        findMenu: '/api/orgRole/auth/findMenu.do',
        addMenu: '/api/orgRole/auth/addMenu.do',
        findController: '/api/orgRole/auth/findController.do',
        addController: '/api/orgRole/auth/addControllerResource.do',
        findAuthedResource: '/api/orgRole/auth/findAuthedResource.do',
        forbiddenMenu: '/api/orgRole/auth/forbiddenMenu.do',
        forbiddenController: '/api/orgRole/auth/forbiddenController.do'
    }
};

export default apiRelativePath;
