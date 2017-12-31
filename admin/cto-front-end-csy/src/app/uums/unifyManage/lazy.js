/**
 * Created by feichongzheng on 17/9/25.
 */
import unifyManageReducer from './reducer';
import view from './views/unifyManage';
import {reducer as appReducer, sagas as appSagas} from './app';
import {reducer as controllerReducer, sagas as controllerSagas} from './controllerResource';
import {reducer as departmentReducer, sagas as departmentSagas} from './department';
import {reducer as menuReducer, sagas as menuSagas} from './menuResource';
import {reducer as orgReducer, sagas as orgSagas} from './org';
import {reducer as orgRoleReducer, sagas as orgRoleSagas} from './orgRole';
import {reducer as orgStructureReducer, sagas as orgStructureSagas} from './orgStructure';
import {reducer as personReducer, sagas as personSagas} from './person';
import {reducer as positionReducer, sagas as positionSagas} from './position';
import {reducer as resourceStructureReducer, sagas as resourceStructureSagas} from './resourceStructure';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../unassignPerson';
import {reducer as unitInfoReducer} from './unitInfo';
import {UumsReducerNames} from '../constants';
const unifyManageName = UumsReducerNames.unify;
const appName = UumsReducerNames.unifyApp;
const controllerName = UumsReducerNames.unifyController;
const departmentName = UumsReducerNames.unifyDepartment;
const menuName = UumsReducerNames.unifyMenu;
const orgName = UumsReducerNames.unifyOrg;
const orgRoleName = UumsReducerNames.unifyOrgRole;
const orgStructureName = UumsReducerNames.unifyOrgStructure;
const personName = UumsReducerNames.unifyPerson;
const positionName = UumsReducerNames.unifyPosition;
const resourceStructureName = UumsReducerNames.unifyResourceStructure;
const unitInfoName = UumsReducerNames.unifyUnitInfo;
const assignPersonName = UumsReducerNames.assignPerson;
const unAssignPersonName = UumsReducerNames.unAssignPerson;
const reducer = {
    [assignPersonName]: assignPersonReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [unifyManageName]: unifyManageReducer,
    [unitInfoName]: unitInfoReducer,
    [resourceStructureName]: resourceStructureReducer,
    [positionName]: positionReducer,
    [personName]: personReducer,
    [orgStructureName]: orgStructureReducer,
    [orgRoleName]: orgRoleReducer,
    [orgName]: orgReducer,
    [menuName]: menuReducer,
    [departmentName]: departmentReducer,
    [controllerName]: controllerReducer,
    [appName]: appReducer
};

const sagas = {
    [assignPersonName]: assignPersonSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [resourceStructureName]: resourceStructureSagas,
    [positionName]: positionSagas,
    [orgStructureName]: orgStructureSagas,
    [personName]: personSagas,
    [orgRoleName]: orgRoleSagas,
    [orgName]: orgSagas,
    [menuName]: menuSagas,
    [departmentName]: departmentSagas,
    [controllerName]: controllerSagas,
    [appName]: appSagas
};

export {reducer, view, sagas};