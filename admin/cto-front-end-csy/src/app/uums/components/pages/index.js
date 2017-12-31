import React from 'react';
import Bundle from '../../../bundle/views/bundle';
import * as actions from './actions';

const view = (props) => {
    return (
        <Bundle load={() => import("./lazy")}>
            {(View) => {
                return <View {...props}/>
            }}
        </Bundle>
    );
};

export {actions, view};
