/**
 * Created by feichongzheng on 17/9/25.
 */
import userSagas from './sagas';
import userReducer from './reducer';
import view from './views/user';
import {UumsReducerNames} from '../constants';
const userName = UumsReducerNames.user;

const reducer = {
    [userName]: userReducer
};

const sagas = {
    [userName]: userSagas
};

export {sagas, reducer, view};