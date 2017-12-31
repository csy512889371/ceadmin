/**
 * Created by feichongzheng on 17/9/25.
 */
import orgSagas from './sagas';
import orgReducer from './reducer';
import view from './views/org';
import {UumsReducerNames} from '../constants';
const orgName = UumsReducerNames.org;

const reducer = {
    [orgName]: orgReducer
};

const sagas = {
    [orgName]: orgSagas
};

export {sagas, reducer, view};