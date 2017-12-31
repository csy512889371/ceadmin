/**
 * Created by feichongzheng on 17/9/25.
 */
import departmentSagas from './sagas';
import departmentReducer from './reducer';
import view from './views/department';
import {UumsReducerNames} from '../constants';
const departmentName = UumsReducerNames.department;
const reducer = {
    [departmentName]: departmentReducer
};

const sagas = {
    [departmentName]: departmentSagas
};

export {sagas, reducer, view};