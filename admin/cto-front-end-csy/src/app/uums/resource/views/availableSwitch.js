/**
 * Created by feichongzheng on 17/1/22.
 */
import React, {Component} from 'react';
import Switch from 'antd/lib/switch';
import 'FayAntd/switch/style/index.js';
import PropTypes from 'prop-types';
import {org, department, position, orgRole, user, menuResource, controllerResource, role, dict, dictType} from '../api';
import {FilterType} from '../../constants';
import {log} from '../../../resource';

class AvailableSwitch extends Component {

    constructor (props) {
        super(props);
        this.state = {
            checked: props.isAvailable === 1,
            isAvailable: props.isAvailable,
        };
    }

    onChange = () => {
        let isAvailable = this.state.isAvailable === 1 ? 2 : 1;
        this.setState({
            checked: isAvailable === 1,
            isAvailable: isAvailable,
        });
        const {dataId, type} = this.props;
        const params = {id: dataId, isAvailable: isAvailable};
        let desc = isAvailable === 1 ? '启用' : '禁用';
        let path;

        switch (type) {
            case FilterType.ORG:
                org.updAvailable(params);
                desc = desc+'机构';
                path = org.relativePath.updAvailable;
                break;
            case FilterType.DEPARTMENT:
                department.updAvailable(params);
                desc = desc+'部门';
                path = department.relativePath.updAvailable;
                break;
            case FilterType.POSITION:
                position.updAvailable(params);
                desc = desc+'职位';
                path = position.relativePath.updAvailable;
                break;
            case FilterType.ORGROLE:
                orgRole.updAvailable(params);
                desc = desc+'角色';
                path = orgRole.relativePath.updAvailable;
                break;
            case FilterType.USER:
                user.updAvailable(params);
                desc = desc+'用户';
                path = user.relativePath.updAvailable;
                break;
            case FilterType.MENURESOURCE:
                menuResource.updAvailable(params);
                desc = desc+'菜单资源';
                path = menuResource.relativePath.updAvailable;
                break;
            case FilterType.CONTROLLERRESOURCE:
                controllerResource.updAvailable(params);
                desc = desc+'请求资源';
                path = controllerResource.relativePath.updAvailable;
                break;
            case FilterType.ROLE:
                role.updAvailable(params);
                desc = desc+'系统角色';
                path = role.relativePath.updAvailable;
                break;
            case FilterType.DICT:
                dict.updAvailable(params);
                desc = desc+'数据字典';
                path = dict.relativePath.updAvailable;
                break;
            case FilterType.DICTTYPE:
                dictType.updAvailable(params);
                desc = desc+'数据字典类型';
                path = dictType.relativePath.updAvailable;
                break;
            default:
                break;
        }
        desc = desc+'->【id：'+dataId+'】';
        log.saveAction(path, desc, 0, 200);
    };

    componentWillReceiveProps (nextProps) {
        this.setState({
            checked: nextProps.isAvailable === 1,
            isAvailable: nextProps.isAvailable,
        });
    }

    render () {
        return (
            <Switch checked={this.state.checked} checkedChildren={'可用'} unCheckedChildren={'不可用'} onChange={this.onChange} />
        );
    }
}

AvailableSwitch.propTypes = {
    isAvailable: PropTypes.number,
    type: PropTypes.string,
    dataId: PropTypes.string,
};

export default AvailableSwitch;
