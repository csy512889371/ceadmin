/**
 * Created by feichongzheng on 17/9/25.
 */
import React from 'react';
import Bundle from '../../bundle/views/bundle';
import * as actions from './actions';
import sagas from './sagas';
import reducer from './reducer';

const view = (props) => {
    return (
        <Bundle load={()=>import("./lazy")}>
            {(View) => {
                return <View {...props}/>
            }}
        </Bundle>
    );
};

export {actions, reducer, sagas, view};
