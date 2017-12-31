/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsDictType = (state) => state.uumsDictType;

export const selectVisibleDictTypePage = createSelector(
    [getUumsDictType],
    (uumsDictType) => uumsDictType
);
