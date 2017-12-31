/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findForPage: '/api/position/findForPage.do',
    findById: '/api/position/findById.do',
    save: '/api/position/add.do',
    update: '/api/position/update.do',
    updAvailable: '/api/position/updAvailable.do',
    findByOrgAndDepartmentForSelect: '/api/position/findForSelect.do',
    remove: '/api/position/delete.do',
    assignUser: '/api/position/assignUser.do',
    unAssignUser: '/api/position/unassignUser.do',
    findAssignedUsers: '/api/position/findAssignedUsers.do',
    findUnAssignedUsers: '/api/position/findUnassignedUsers.do',
    auth: {
        findMenu: '/api/position/auth/findMenu.do',
        addMenu: '/api/position/auth/addMenu.do',
        findController: '/api/position/auth/findController.do',
        addController: '/api/position/auth/addControllerResource.do',
        findAuthedResource: '/api/position/auth/findAuthedResource.do',
        forbiddenMenu: '/api/position/auth/forbiddenMenu.do',
        forbiddenController: '/api/position/auth/forbiddenController.do'
    }
};

export default apiRelativePath;
