/**
 * Created by feichongzheng on 17/9/25.
 */
import unitInfoReducer from './reducer';
import view from './views/unitInfo';
import {UumsReducerNames} from '../../constants';
const unitInfoName = UumsReducerNames.unifyUnitInfo;
const reducer = {
    [unitInfoName]: unitInfoReducer
};

export {reducer, view};