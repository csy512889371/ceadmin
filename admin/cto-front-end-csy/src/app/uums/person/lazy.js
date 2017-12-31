/**
 * Created by feichongzheng on 17/9/25.
 */
import personSagas from './sagas';
import personReducer from './reducer';
import view from './views/person';
import {UumsReducerNames} from '../constants';
const personName = UumsReducerNames.person;

const reducer = {
    [personName]: personReducer
};

const sagas = {
    [personName]: personSagas
};

export {sagas, reducer, view};