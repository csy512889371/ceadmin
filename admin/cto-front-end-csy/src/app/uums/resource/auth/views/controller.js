/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Tree from 'antd/lib/tree';
import Switch from 'antd/lib/switch';
import 'FayAntd/tree/style/index.js';
import 'FayAntd/switch/style/index.js';

import {org, department, position, orgRole, user, role, person} from '../../api';
import {FilterType} from '../../../constants';
import {connect} from 'react-redux';
import {expandControllerForAuth, checkControllerForAuth, selectControllerForAuth} from '../actions';
import {FIND_CONTROLLER_FOR_AUTH_FETCH, FIND_CONTROLLER_FOR_AUTH_SUCCESS, FIND_CONTROLLER_FOR_AUTH_ERROR} from '../actionTypes';

const TreeNode = Tree.TreeNode;
const Controller = ({
                        controllerType, expandedKeys, autoExpandParent, checkedKeys, selectedKeys, dataSource, fetchSuccess, err, forbiddenKeys,
                        onExpand, onCheck, onSelect, forbiddenChange
                    }) => {

    const loop = (data) => data && data.map((item) => {
        const {children, nodeId, nodeName} = item;
        const nodeSwitch = <Switch checkedChildren="禁用"
                                   defaultChecked={forbiddenKeys.find((value) => {return value === nodeId})}
                                   unCheckedChildren="解禁" size='small' onChange={(v) => forbiddenChange(v, nodeId)}/>;
        const title = [<span key={nodeId+1}>{nodeName}</span>, <span key={nodeId+2}>{nodeSwitch}</span>];
        if (children && children.length > 0) {
            return (
                <TreeNode key={nodeId} title={title}>
                    {loop(children)}
                </TreeNode>
            );
        }
        return <TreeNode key={nodeId} title={title} />;
    });
    switch (controllerType) {
        case FIND_CONTROLLER_FOR_AUTH_FETCH:
            return <div>请求资源数据获取中...</div>;
        case FIND_CONTROLLER_FOR_AUTH_SUCCESS:
            if (fetchSuccess) {
                if(dataSource){
                    return (
                        <Tree
                            showLine
                            checkable
                            checkStrictly
                            onExpand={onExpand} expandedKeys={expandedKeys}
                            autoExpandParent={autoExpandParent}
                            onCheck={onCheck} checkedKeys={checkedKeys}
                            onSelect={onSelect} selectedKeys={selectedKeys}
                        >
                            {loop(dataSource)}
                        </Tree>
                    );
                }else{
                    return <div>没有权限控制的请求资源</div>;
                }
            } else {
                return <div>{err}</div>;
            }
        case FIND_CONTROLLER_FOR_AUTH_ERROR:
            return <div>请求资源数据获取失败</div>;
        default:
            return <div>点击左侧菜单资源获取数据</div>;
    }
};

const mapStateToProps = (state) => {
    const {
        controllerType, controllerDataSource, controllerSuccess, controllerErr, controllerExpandedKeys,
        controllerAutoExpandParent, controllerCheckedKeys, controllerSelectedKeys, controllerForbiddenKeys
    } = state.uumsAuth;
    return {
        controllerType: controllerType,
        expandedKeys: controllerExpandedKeys,
        autoExpandParent: controllerAutoExpandParent,
        checkedKeys: controllerCheckedKeys,
        selectedKeys: controllerSelectedKeys,
        dataSource: controllerDataSource,
        fetchSuccess: controllerSuccess,
        err: controllerErr,
        forbiddenKeys: controllerForbiddenKeys
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const onExpand = (expandedKeys) => {
        dispatch(expandControllerForAuth(expandedKeys));
    };

    const onCheck = (checkedKeys, e) => {
        const {type, dataId} = ownProps;
        const params = {dataId: dataId, controllerId: e.node.props.eventKey, checked: e.checked};
        switch (type) {
            case FilterType.ORG:
                org.addController(params);
                break;
            case FilterType.DEPARTMENT:
                department.addController(params);
                break;
            case FilterType.POSITION:
                position.addController(params);
                break;
            case FilterType.ORGROLE:
                orgRole.addController(params);
                break;
            case FilterType.USER:
                user.addController(params);
                break;
            case FilterType.ROLE:
                role.addController(params);
                break;
            case FilterType.PERSON:
                person.addController(params);
                break;
            default:
                break;
        }
        dispatch(checkControllerForAuth(checkedKeys));
    };

    const onSelect = (selectedKeys) => {
        if(selectedKeys.length>0){
            dispatch(selectControllerForAuth(selectedKeys));
        }
    };

    const forbiddenChange = (v, id) => {
        const {type, dataId} = ownProps;
        const params = {dataId: dataId, controllerId: id, checked: v};
        switch (type) {
            case FilterType.ORG:
                org.forbiddenController(params);
                break;
            case FilterType.DEPARTMENT:
                department.forbiddenController(params);
                break;
            case FilterType.POSITION:
                position.forbiddenController(params);
                break;
            case FilterType.ORGROLE:
                orgRole.forbiddenController(params);
                break;
            case FilterType.USER:
                user.forbiddenController(params);
                break;
            case FilterType.ROLE:
                role.forbiddenController(params);
                break;
            case FilterType.PERSON:
                person.forbiddenController(params);
                break;
            default:
                break;
        }
    };

    return {
        onExpand: onExpand,
        onCheck: onCheck,
        onSelect: onSelect,
        forbiddenChange: forbiddenChange,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
