/**
 * Created by feichongzheng on 17/1/12.
 */
import React from 'react';
import DepartmentInfo from './departmentInfo';
import Tabs from 'antd/lib/tabs';
import 'FayAntd/tabs/style/index.js';

import {connect} from 'react-redux';
import {changeActiveForUnifyDepartment} from '../actions';
import {PositionSaveForm} from '../../position';
import {PersonSaveForm} from '../../person';

const TabPane = Tabs.TabPane;

const Department = ({activeKey, id, onChange}) => {
    return <Tabs
        activeKey={activeKey}
        onChange={onChange}
        size="small"
        tabPosition='right'
    >
        <TabPane tab="详情" key="1">
            <DepartmentInfo/>
        </TabPane>
        <TabPane tab="新增职位" key="2">
            <PositionSaveForm departmentId={id}/>
        </TabPane>
        <TabPane tab="新增人员" key="3">
            <PersonSaveForm departmentId={id}/>
        </TabPane>
    </Tabs>;
};

const mapStateToProps = (state) => {
    const {activeKey, id} = state.uumsUnifyDepartment;
    return {
        activeKey: activeKey,
        id: id
    }
};

const mapDispatchToProps = (dispatch) => {
    const onChange = (activeKey) => {
        dispatch(changeActiveForUnifyDepartment(activeKey));
    };

    return {
        onChange: onChange
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Department);
