/**
 * Created by feichongzheng on 17/1/12.
 */
import React from 'react';
import OrgRoleInfo from './orgRoleInfo';
import Tabs from 'antd/lib/tabs';
import 'FayAntd/tabs/style/index.js';

import {PersonSaveForm} from '../../person';
import {connect} from 'react-redux';
import {changeActiveForUnifyOrgRole} from '../actions';

const TabPane = Tabs.TabPane;

const OrgRole = ({activeKey, id, onChange}) => {
    return <Tabs
        onChange={onChange}
        activeKey={activeKey}
        size="small"
        tabPosition='right'
    >
        <TabPane tab="详情" key="1">
            <OrgRoleInfo/>
        </TabPane>
        <TabPane tab="新增人员" key="2">
            <PersonSaveForm orgRoleId={id}/>
        </TabPane>
    </Tabs>;
};

const mapStateToProps = (state) => {
    const {activeKey, id} = state.uumsUnifyOrgRole;
    return {
        activeKey: activeKey,
        id: id
    }
};

const mapDispatchToProps = (dispatch) => {
    const onChange = (activeKey) => {
        dispatch(changeActiveForUnifyOrgRole(activeKey));
    };

    return {
        onChange: onChange
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrgRole);
