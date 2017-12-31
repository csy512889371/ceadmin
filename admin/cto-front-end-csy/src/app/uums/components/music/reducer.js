import * as types from './actionTypes';

export default (state = {}, action) => {
    const {type, err, params, data} = action;
    switch (type) {
        case types.FIND_MUSIC_FOR_PAGE_FETCH: {
            return {
                type: type
            }
        }
        case types.FIND_MUSIC_FOR_PAGE_SUCCESS: {
            return {
                type: type, data: data, params: params
            }
        }
        case types.FIND_MUSIC_FOR_PAGE_ERROR: {
            return {
                type: type, err: err, params: params
            }
        }
        default: {
            return state;
        }
    }
}
