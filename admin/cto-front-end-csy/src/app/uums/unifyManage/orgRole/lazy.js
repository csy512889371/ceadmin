/**
 * Created by feichongzheng on 17/9/25.
 */
import orgRoleSagas from './sagas';
import orgRoleReducer from './reducer';
import view from './views/orgRole';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../../unassignPerson';
import {UumsReducerNames} from '../../constants';
const orgRoleName = UumsReducerNames.unifyOrgRole;
const assignPersonName = UumsReducerNames.assignPerson;
const unAssignPersonName = UumsReducerNames.unAssignPerson;
const reducer = {
    [assignPersonName]: assignPersonReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [orgRoleName]: orgRoleReducer
};

const sagas = {
    [assignPersonName]: assignPersonSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [orgRoleName]: orgRoleSagas
};

export {sagas, reducer, view};