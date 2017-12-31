import {createSelector} from 'reselect';

const getCompLoginData = (state) => state.compLoginData;

export const selectVisibleMenuResourceTreeTable = createSelector(
    [getCompLoginData],
    (compLoginData) => compLoginData
);
