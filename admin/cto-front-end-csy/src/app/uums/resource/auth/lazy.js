/**
 * Created by feichongzheng on 17/10/9.
 */
import authSagas from './sagas';
import authReducer from './reducer';
import view from './views/auth';
import {UumsReducerNames} from '../../constants';
const authName = UumsReducerNames.auth;

const reducer = {
    [authName]: authReducer
};

const sagas = {
    [authName]: authSagas
};

export {sagas, reducer, view};
