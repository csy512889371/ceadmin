/**
 * Created by feichongzheng on 17/10/9.
 */
import React from 'react';
import Bundle from '../../../bundle/views/bundle';
import * as actions from './actions';
import reducer from './reducer';
import sagas from './sagas';
import Privilege from './views/privilege';

const view = (props) => {
    return (
        <Bundle load={() => import("./lazy")}>
            {(View) => {
                return <View {...props}/>
            }}
        </Bundle>
    );
};

export {actions, view, reducer, sagas, Privilege};
