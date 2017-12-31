import {createSelector} from 'reselect';

const getUumsMusic = (state) => state.compMusics;

export const selectVisibleMusicPage = createSelector(
    [getUumsMusic],
    (uumsMusic) => uumsMusic
);
