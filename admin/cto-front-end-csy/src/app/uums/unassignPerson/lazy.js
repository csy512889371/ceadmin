/**
 * Created by feichongzheng on 17/9/25.
 */
import unAssignPersonSagas from './sagas';
import unAssignPersonReducer from './reducer';
import view from './views/unAssignPerson';
import {UumsReducerNames} from '../constants';
const unAssignPersonName = UumsReducerNames.unAssignPerson;
const reducer = {
    [unAssignPersonName]: unAssignPersonReducer
};

const sagas = {
    [unAssignPersonName]: unAssignPersonSagas
};

export {sagas, reducer, view};