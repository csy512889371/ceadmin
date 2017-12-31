import React from 'react';
import Bundle from '../../bundle/views/bundle';
import AppSelect from './views/appSelect';

const view = (props) => {
    return (
        <Bundle load={() => import('./lazy')}>
            {(View) => {
                return <View {...props}/>
            }}
        </Bundle>
    );
};

export {view, AppSelect};
