/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findForPage: '/api/user/findForPage.do',
    findById: '/api/user/findById.do',
    resetPassword: '/api/user/resetPassword.do',
    save: '/api/user/add.do',
    updAvailable: '/api/user/updAvailable.do',
    remove: '/api/user/delete.do',
    relation: {
        add: '/api/user/relation/add.do',
        remove: '/api/user/relation/remove.do'
    },
    auth: {
        findMenu: '/api/user/auth/findMenu.do',
        addMenu: '/api/user/auth/addMenu.do',
        findController: '/api/user/auth/findController.do',
        addController: '/api/user/auth/addControllerResource.do',
        findAuthedResource: '/api/user/auth/findAuthedResource.do',
        forbiddenMenu: '/api/user/auth/forbiddenMenu.do',
        forbiddenController: '/api/user/auth/forbiddenController.do'
    }
};

export default apiRelativePath;
