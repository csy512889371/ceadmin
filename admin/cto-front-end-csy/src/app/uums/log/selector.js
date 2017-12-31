/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsLog = (state) => state.uumsLog;

export const selectVisibleLogPage = createSelector(
    [getUumsLog],
    (uumsLog) => uumsLog
);
