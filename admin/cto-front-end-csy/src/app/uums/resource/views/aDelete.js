/**
 * Created by feichongzheng on 17/1/16.
 */
import React, {Component} from 'react';
import Popconfirm from 'antd/lib/popconfirm';
import message from 'antd/lib/message';
import 'FayAntd/popconfirm/style/index.js';
import 'FayAntd/message/style/index.js';
import PropTypes from 'prop-types';
import {app, org, department, position, orgRole, user, menuResource, controllerResource, role, dict, dictType} from '../api';
import {FilterType} from '../../constants';
import {log} from '../../../resource';

class ADelete extends Component {

    confirm = () => {
        const startTime = new Date().getTime();
        let relativePath;
        let desc;
        const {dataId, type, cb} = this.props;
        const ids = dataId.split(';');
        let promise;
        switch (type) {
            case FilterType.APP:
                promise = app.remove({ids: ids});
                relativePath = app.relativePath.remove;
                desc='删除应用系统';
                break;
            case FilterType.ORG:
                promise = org.remove({ids: ids});
                relativePath = org.relativePath.remove;
                desc='删除机构';
                break;
            case FilterType.DEPARTMENT:
                promise = department.remove({ids: ids});
                relativePath = department.relativePath.remove;
                desc='删除部门信息';
                break;
            case FilterType.POSITION:
                promise = position.remove({ids: ids});
                relativePath = position.relativePath.remove;
                desc='删除职位信息';
                break;
            case FilterType.ORGROLE:
                promise = orgRole.remove({ids: ids});
                relativePath = orgRole.relativePath.remove;
                desc='删除角色信息';
                break;
            case FilterType.USER:
                promise = user.remove({ids: ids});
                relativePath = user.relativePath.remove;
                desc='删除用户信息';
                break;
            case FilterType.MENURESOURCE:
                promise = menuResource.remove({ids: ids});
                relativePath = menuResource.relativePath.remove;
                desc='删除菜单资源信息';
                break;
            case FilterType.CONTROLLERRESOURCE:
                promise = controllerResource.remove({ids: ids});
                relativePath = controllerResource.relativePath.remove;
                desc='删除请求资源信息';
                break;
            case FilterType.ROLE:
                promise = role.remove({ids: ids});
                relativePath = role.relativePath.remove;
                desc='删除系统角色';
                break;
            case FilterType.DICT:
                promise = dict.remove({ids: ids});
                relativePath = dict.relativePath.remove;
                desc='删除数据字典';
                break;
            case FilterType.DICTTYPE:
                promise = dictType.remove({ids: ids});
                relativePath = dictType.relativePath.remove;
                desc='删除数据字典类型';
                break;
            default:
                break;
        }
        promise.then((res) => res.json())
            .then((res) => {
                desc = desc + '->【ID：'+ids+'】';
                log.saveAction(relativePath, desc, new Date().getTime()-startTime, 200);
                if (res.success) {
                    message.success('删除成功！');
                    cb();
                } else {
                    message.error('删除失败！');
                }
            })
            .catch( (err) => {
                throw err;
            });
    };

    render () {
        return (
            <Popconfirm title="您确认删除?" onConfirm={this.confirm} okText="确认" cancelText="取消">
                <a href="#">删除</a>
            </Popconfirm>
        );
    }
}

ADelete.propTypes = {
    dataId: PropTypes.string,
    type: PropTypes.string,
    cb: PropTypes.func,
};

export default ADelete;
