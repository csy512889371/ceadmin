import musicSagas from './sagas';
import musicReducer from './reducer';
import view from './views/music';
import {UumsCompsReducerNames} from '../../constants';
const musicName = UumsCompsReducerNames.compMusics;
const reducer = {
    [musicName]: musicReducer
};

const sagas = {
    [musicName]: musicSagas
};

export {sagas, reducer, view};
