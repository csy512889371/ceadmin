import compLoginSagas from './sagas';
import compLoginReducer from './reducer';
import view from './views/Login';
import {UumsCompsReducerNames} from '../../constants';

const compLoginName = UumsCompsReducerNames.compLogin;

const reducer = {
    [compLoginName]: compLoginReducer
};

const sagas = {
    [compLoginName]: compLoginSagas
};

export {sagas, reducer, view};
