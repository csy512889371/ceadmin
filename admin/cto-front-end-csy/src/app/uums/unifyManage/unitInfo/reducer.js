/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export default (state = {}, action) => {
    const {type, contentType, title} = action;
    switch (type) {
        case types.CHANGE_FOR_UNITINFO: {
            return {
                type: type, contentType: contentType, title: title
            }
        }
        default: {
            return state;
        }
    }
}