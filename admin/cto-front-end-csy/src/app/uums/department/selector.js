/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsDepartment = (state) => state.uumsDepartment;

export const selectVisibleDepartmentPage = createSelector(
    [getUumsDepartment],
    (uumsDepartment) => uumsDepartment
);
