/**
 * Created by feichongzheng on 17/9/25.
 */
import menuResourceSagas from './sagas';
import menuResourceReducer from './reducer';
import view from './views/menuResource';
import {UumsReducerNames} from '../constants';

const menuResourceName = UumsReducerNames.menuResource;
const reducer = {
    [menuResourceName]: menuResourceReducer
};

const sagas = {
    [menuResourceName]: menuResourceSagas
};

export {sagas, reducer, view};
