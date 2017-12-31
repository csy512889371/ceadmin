/**
 * Created by feichongzheng on 17/9/25.
 */
import controllerSagas from './sagas';
import controllerReducer from './reducer';
import view from './views/controllerResource';
import {UumsReducerNames} from '../../constants';
const controllerName = UumsReducerNames.unifyController;
const reducer = {
    [controllerName]: controllerReducer
};

const sagas = {
    [controllerName]: controllerSagas
};

export {sagas, reducer, view};