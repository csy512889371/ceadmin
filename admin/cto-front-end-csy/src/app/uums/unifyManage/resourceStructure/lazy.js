/**
 * Created by feichongzheng on 17/9/25.
 */
import resourceStructureSagas from './sagas';
import resourceStructureReducer from './reducer';
import view from './views/resourceStructure';
import {UumsReducerNames} from '../../constants';
const resourceStructureName = UumsReducerNames.unifyResourceStructure;
const reducer = {
    [resourceStructureName]: resourceStructureReducer
};

const sagas = {
    [resourceStructureName]: resourceStructureSagas
};

export {sagas, reducer, view};