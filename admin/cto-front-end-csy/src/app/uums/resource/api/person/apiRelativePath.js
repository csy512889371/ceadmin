/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findForPage: '/api/person/findForPage.do',
    findById: '/api/person/findById.do',
    save: '/api/person/add.do',
    update: '/api/person/update.do',
    auth: {
        findMenu: '/api/person/auth/findMenu.do',
        addMenu: '/api/person/auth/addMenu.do',
        findController: '/api/person/auth/findController.do',
        addController: '/api/person/auth/addControllerResource.do',
        findAuthedResource: '/api/person/auth/findAuthedResource.do',
        forbiddenMenu: '/api/person/auth/forbiddenMenu.do',
        forbiddenController: '/api/person/auth/forbiddenController.do'
    }
};

export default apiRelativePath;
