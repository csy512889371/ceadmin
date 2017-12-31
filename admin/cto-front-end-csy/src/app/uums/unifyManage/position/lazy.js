/**
 * Created by feichongzheng on 17/9/25.
 */
import positionSagas from './sagas';
import positionReducer from './reducer';
import view from './views/position';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../../unassignPerson';
import {UumsReducerNames} from '../../constants';
const positionName = UumsReducerNames.unifyPosition;
const assignPersonName = UumsReducerNames.assignPerson;
const unAssignPersonName = UumsReducerNames.unAssignPerson;
const reducer = {
    [assignPersonName]: assignPersonReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [positionName]: positionReducer
};

const sagas = {
    [assignPersonName]: assignPersonSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [positionName]: positionSagas
};

export {sagas, reducer, view};