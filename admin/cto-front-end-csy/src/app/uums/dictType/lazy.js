/**
 * Created by feichongzheng on 17/9/25.
 */
import dictTypeSagas from './sagas';
import dictTypeReducer from './reducer';
import view from './views/dictType';
import {UumsReducerNames} from '../constants';
const dictTypeName = UumsReducerNames.dictType;
const reducer = {
    [dictTypeName]: dictTypeReducer
};

const sagas = {
    [dictTypeName]: dictTypeSagas
};

export {sagas, reducer, view};