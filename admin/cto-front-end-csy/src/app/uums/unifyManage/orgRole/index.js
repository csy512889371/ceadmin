/**
 * Created by feichongzheng on 17/9/25.
 */
import React from 'react';
import Bundle from '../../../bundle/views/bundle';
import * as actions from './actions';
import OrgRoleSaveForm from './views/orgRoleSaveForm';
import reducer from './reducer';
import sagas from './sagas';

const view = (props) => {
    return (
        <Bundle load={() => import("./lazy")}>
            {(View) => {
                return <View {...props}/>
            }}
        </Bundle>
    );
};

export {actions, view, OrgRoleSaveForm, reducer, sagas};
