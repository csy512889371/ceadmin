export const FilterType = {
    APP: 'app',
    ORG: 'org',
    DEPARTMENT: 'department',
    POSITION: 'position',
    ORGROLE: 'orgRole',
    USER: 'user',
    MENURESOURCE: 'menuResource',
    CONTROLLERRESOURCE: 'controllerResource',
    ROLE: 'role',
    PERSON: 'person',
    DICT: 'dict',
    DICTTYPE: 'dictType'
};

export const UumsRouterPaths = {
    APP: '/uums/app',
    ORG: '/uums/org',
    DEPARTMENT: '/uums/department',
    POSITION: '/uums/position',
    ORGROLE: '/uums/orgRole',
    USER: '/uums/user',
    MENURESOURCE: '/uums/menuResource',
    CONTROLLERRESOURCE: '/uums/controllerResource',
    ROLE: '/uums/role',
    PERSON: '/uums/person',
    UNIFYMANAGE: '/uums/unifyManage',
    DICT: '/uums/dict',
    DICTTYPE: '/uums/dictType',
    LOG: '/uums/log'
};

export const UumsCompsRouterPaths = {
    Buttons:'/uums/compButton',
    Icons:'/uums/compIcons',
    Spins:'/uums/compSpins',
    Modals:'/uums/compModals',
    Notifications:'/uums/compNotifications',
    Tabs:'/uums/compTabs',
    Wysiwyg:'/uums/compWysiwyg',
    Drags:'/uums/compDrags',
    Gallery:'/uums/compGallery',

    CompBasicAnimations:'/uums/compBasicAnimations',
    CompExampleAnimations:'/uums/compExampleAnimations',

    CompBasicTable:'/uums/compBasicTable',
    CompAdvancedTable:'/uums/compAdvancedTable',
    CompAsynchronousTable:'/uums/compAsynchronousTable',

    CompBasicForm:'/uums/compBasicForm',

    CompEcharts:'/uums/compEcharts',
    CompRecharts:'/uums/compRecharts',


    CompLogin:'/uums/compLogin',
    Comp404:'/uums/comp404',

    CompAuthBasic:'/uums/compAuthBasic',

    CompMusics:'/uums/compMusics'
}

export const UumsCompsReducerNames = {
    compLogin: "compLoginData",
    compMusics: "compMusics"
}

export const UumsReducerNames = {
    router: 'uums',
    app: 'uumsApp',
    org: 'uumsOrg',
    department: 'uumsDepartment',
    position: 'uumsPosition',
    orgRole: 'uumsOrgRole',
    user: 'uumsUser',
    menuResource: 'uumsMenuResource',
    controllerResource: 'uumsControllerResource',
    role: 'uumsRole',
    person: 'uumsPerson',
    assignPerson: 'uumsAssignPerson',
    unAssignPerson: 'uumsUnAssignPerson',
    assignUser: 'uumsAssignUser',
    unAssignUser: 'uumsUnAssignUser',
    auth: 'uumsAuth',
    unify: 'uumsUnifyManage',
    unifyApp: 'uumsUnifyApp',
    unifyController: 'uumsUnifyController',
    unifyDepartment: 'uumsUnifyDepartment',
    unifyMenu: 'uumsUnifyMenu',
    unifyOrg: 'uumsUnifyOrg',
    unifyOrgRole: 'uumsUnifyOrgRole',
    unifyOrgStructure: 'uumsUnifyOrgStructure',
    unifyPerson: 'uumsUnifyPerson',
    unifyPosition: 'uumsUnifyPosition',
    unifyResourceStructure: 'uumsUnifyResourceStructure',
    unifyUnitInfo: 'uumsUnifyUnitInfo',
    dict: 'uumsDict',
    dictType: 'uumsDictType',
    log: 'uumsLog'
};
