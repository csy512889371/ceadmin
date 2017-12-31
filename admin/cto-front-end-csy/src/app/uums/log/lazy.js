/**
 * Created by feichongzheng on 17/9/25.
 */
import logSagas from './sagas';
import logReducer from './reducer';
import view from './views/log';
import {UumsReducerNames} from '../constants';
const logName = UumsReducerNames.log;
const reducer = {
    [logName]: logReducer
};

const sagas = {
    [logName]: logSagas
};

export {sagas, reducer, view};