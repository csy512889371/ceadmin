/**
 * Created by feichongzheng on 17/9/25.
 */
import roleSagas from './sagas';
import roleReducer from './reducer';
import view from './views/role';
import {UumsReducerNames} from '../constants';
const roleName = UumsReducerNames.role;

const reducer = {
    [roleName]: roleReducer
};

const sagas = {
    [roleName]: roleSagas
};

export {sagas, reducer, view};