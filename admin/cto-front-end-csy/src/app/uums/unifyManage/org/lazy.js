/**
 * Created by feichongzheng on 17/9/25.
 */
import orgSagas from './sagas';
import orgReducer from './reducer';
import view from './views/org';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../../unassignPerson';
import {UumsReducerNames} from '../../constants';
const orgName = UumsReducerNames.unifyOrg;
const assignPersonName = UumsReducerNames.assignPerson;
const unAssignPersonName = UumsReducerNames.unAssignPerson;
const reducer = {
    [assignPersonName]: assignPersonReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [orgName]: orgReducer
};

const sagas = {
    [assignPersonName]: assignPersonSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [orgName]: orgSagas
};

export {sagas, reducer, view};