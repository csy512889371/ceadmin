/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findForPage: '/api/department/findForPage.do',
    findById: '/api/department/findById.do',
    findByOrgForSelect: '/api/department/findByOrgForSelect.do',
    save: '/api/department/add.do',
    update: '/api/department/update.do',
    updAvailable: '/api/department/updAvailable.do',
    remove: '/api/department/delete.do',
    assignUser: '/api/department/assignUser.do',
    unAssignUser: '/api/department/unassignUser.do',
    findAssignedUsers: '/api/department/findAssignedUsers.do',
    findUnAssignedUsers: '/api/department/findUnassignedUsers.do',
    auth: {
        findMenu: '/api/department/auth/findMenu.do',
        addMenu: '/api/department/auth/addMenu.do',
        findController: '/api/department/auth/findController.do',
        addController: '/api/department/auth/addControllerResource.do',
        findAuthedResource: '/api/department/auth/findAuthedResource.do',
        forbiddenMenu: '/api/department/auth/forbiddenMenu.do',
        forbiddenController: '/api/department/auth/forbiddenController.do'
    }
};

export default apiRelativePath;
