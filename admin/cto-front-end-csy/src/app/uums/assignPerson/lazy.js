/**
 * Created by feichongzheng on 17/9/25.
 */
import assignPersonSagas from './sagas';
import assignPersonReducer from './reducer';
import view from './views/assignPerson';
import {UumsReducerNames} from '../constants';
const assignPersonName = UumsReducerNames.assignPerson;
const reducer = {
    [assignPersonName]: assignPersonReducer
};

const sagas = {
    [assignPersonName]: assignPersonSagas
};

export {sagas, reducer, view};