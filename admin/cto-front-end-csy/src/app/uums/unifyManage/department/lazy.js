/**
 * Created by feichongzheng on 17/9/25.
 */
import departmentSagas from './sagas';
import departmentReducer from './reducer';
import view from './views/department';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../../unassignPerson';
import {UumsReducerNames} from '../../constants';
const departmentName = UumsReducerNames.unifyDepartment;
const assignPersonName = UumsReducerNames.assignPerson;
const unAssignPersonName = UumsReducerNames.unAssignPerson;
const reducer = {
    [assignPersonName]: assignPersonReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [departmentName]: departmentReducer
};

const sagas = {
    [assignPersonName]: assignPersonSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [departmentName]: departmentSagas
};

export {sagas, reducer, view};