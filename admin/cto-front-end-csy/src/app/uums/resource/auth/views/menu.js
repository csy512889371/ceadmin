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
import {expandMenuForAuth, checkMenuForAuth, selectMenuForAuth, findControllerForAuth} from '../actions';
import {FIND_MENU_FOR_AUTH_FETCH, FIND_MENU_FOR_AUTH_SUCCESS, FIND_MENU_FOR_AUTH_ERROR} from '../actionTypes';


const TreeNode = Tree.TreeNode;

const Menu = ({
                  appId, menuType, fetchSuccess, dataSource, err, expandedKeys, autoExpandParent, checkedKeys, selectedKeys, forbiddenKeys,
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
        return <TreeNode key={nodeId} title={title}/>;
    });
    switch (menuType) {
        case FIND_MENU_FOR_AUTH_FETCH:
            return <div>菜单资源数据获取中...</div>;
        case FIND_MENU_FOR_AUTH_SUCCESS:
            if (fetchSuccess) {
                if(dataSource === null){
                    return <div>没有权限控制的菜单资源</div>;
                }else{
                    return (
                        <Tree
                            showLine
                            checkable
                            checkStrictly
                            onExpand={onExpand} expandedKeys={expandedKeys}
                            autoExpandParent={autoExpandParent}
                            onCheck={onCheck} checkedKeys={checkedKeys}
                            onSelect={(selectedKeys) => onSelect(selectedKeys, appId)} selectedKeys={selectedKeys}
                        >
                            {loop(dataSource)}
                        </Tree>
                    );
                }
            } else {
                return <div>{err}</div>
            }
        case FIND_MENU_FOR_AUTH_ERROR:
            return <div>菜单资源数据获取失败</div>;
        default:
            return <div>准备获取数据</div>;
    }
};

const mapStateToProps = (state) => {
    const {appId, menuType, menuDataSource, menuSuccess, menuErr, menuExpandedKeys, menuAutoExpandParent, menuCheckedKeys, menuSelectedKeys, menuForbiddenKeys} = state.uumsAuth;
    return {
        appId: appId,
        menuType: menuType,
        expandedKeys: menuExpandedKeys,
        autoExpandParent: menuAutoExpandParent,
        checkedKeys: menuCheckedKeys,
        selectedKeys: menuSelectedKeys,
        dataSource: menuDataSource,
        fetchSuccess: menuSuccess,
        forbiddenKeys: menuForbiddenKeys,
        err: menuErr
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const onExpand = (expandedKeys) => {
        dispatch(expandMenuForAuth(expandedKeys));
    };

    const onCheck = (checkedKeys, e) => {
        const {type, dataId} = ownProps;
        const params = {dataId: dataId, menuId: e.node.props.eventKey, checked: e.checked};
        switch (type) {
            case FilterType.ORG:
                org.addMenu(params);
                break;
            case FilterType.DEPARTMENT:
                department.addMenu(params);
                break;
            case FilterType.POSITION:
                position.addMenu(params);
                break;
            case FilterType.ORGROLE:
                orgRole.addMenu(params);
                break;
            case FilterType.USER:
                user.addMenu(params);
                break;
            case FilterType.ROLE:
                role.addMenu(params);
                break;
            case FilterType.PERSON:
                person.addMenu(params);
                break;
            default:
                break;
        }
        dispatch(checkMenuForAuth(checkedKeys));
    };

    const onSelect = (selectedKeys, appId) => {
        if(selectedKeys.length > 0){
            dispatch(selectMenuForAuth(selectedKeys));
            const {type, dataId} = ownProps;
            const params = {appId: appId, dataId: dataId, menuId: selectedKeys[0]};
            dispatch(findControllerForAuth(type, params));
        }
    };

    const forbiddenChange = (v, id) => {
        const {type, dataId} = ownProps;
        const params = {dataId: dataId, menuId: id, checked: v};
        switch (type) {
            case FilterType.ORG:
                org.forbiddenMenu(params);
                break;
            case FilterType.DEPARTMENT:
                department.forbiddenMenu(params);
                break;
            case FilterType.POSITION:
                position.forbiddenMenu(params);
                break;
            case FilterType.ORGROLE:
                orgRole.forbiddenMenu(params);
                break;
            case FilterType.USER:
                user.forbiddenMenu(params);
                break;
            case FilterType.ROLE:
                role.forbiddenMenu(params);
                break;
            case FilterType.PERSON:
                person.forbiddenMenu(params);
                break;
            default:
                break;
        }
    };

    return {
        onExpand: onExpand,
        onCheck: onCheck,
        onSelect: onSelect,
        forbiddenChange: forbiddenChange
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
