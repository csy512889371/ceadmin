/**
 * Created by feichongzheng on 17/9/25.
 */
import menuSagas from './sagas';
import menuReducer from './reducer';
import view from './views/menuResource';
import {UumsReducerNames} from '../../constants';
const menuName = UumsReducerNames.unifyMenu;
const reducer = {
    [menuName]: menuReducer
};

const sagas = {
    [menuName]: menuSagas
};

export {sagas, reducer, view};