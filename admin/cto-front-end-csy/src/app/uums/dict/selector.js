/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsDict = (state) => state.uumsDict;

export const selectVisibleDictPage = createSelector(
    [getUumsDict],
    (uumsDict) => uumsDict
);
