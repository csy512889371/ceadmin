/**
 * Created by feichongzheng on 17/9/25.
 */
import dictSagas from './sagas';
import dictReducer from './reducer';
import view from './views/dict';
import {UumsReducerNames} from '../constants';
const dictName = UumsReducerNames.dict;
const reducer = {
    [dictName]: dictReducer
};

const sagas = {
    [dictName]: dictSagas
};

export {sagas, reducer, view};