/**
 * Created by feichongzheng on 17/9/25.
 */
import orgRoleSagas from './sagas';
import orgRoleReducer from './reducer';
import view from './views/orgRole';
import {UumsReducerNames} from '../constants';
const orgRoleName = UumsReducerNames.orgRole;

const reducer = {
    [orgRoleName]: orgRoleReducer
};

const sagas = {
    [orgRoleName]: orgRoleSagas
};

export {sagas, reducer, view};