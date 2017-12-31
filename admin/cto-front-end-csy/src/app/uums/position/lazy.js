/**
 * Created by feichongzheng on 17/9/25.
 */
import positionSagas from './sagas';
import positionReducer from './reducer';
import view from './views/position';
import {UumsReducerNames} from '../constants';
const positionName = UumsReducerNames.position;

const reducer = {
    [positionName]: positionReducer
};

const sagas = {
    [positionName]: positionSagas
};

export {sagas, reducer, view};