/**
 * Created by feichongzheng on 17/8/25.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tag from 'antd/lib/tag';
import Alert from 'antd/lib/alert';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';
import Tabs from 'antd/lib/tabs';

import 'FayAntd/tabs/style/index.js';
import 'FayAntd/tag/style/index.js';
import 'FayAntd/icon/style/index.js';
import 'FayAntd/alert/style/index.js';
import 'FayAntd/spin/style/index.js';
import {org, department, position, orgRole, user, role, person} from '../../api';
import {FilterType} from '../../../constants';

const TabPane = Tabs.TabPane;

class Privilege extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data: [],
            message: '正在获取被授予的权限列表',
            messageType: 'info',
        };
        this.getData();
    }

    getData = () => {
        const {id, type} = this.props;
        let promise;
        switch (type) {
            case FilterType.ORG:
                promise = org.findPrivilege({dataId: id});
                break;
            case FilterType.DEPARTMENT:
                promise = department.findPrivilege({dataId: id});
                break;
            case FilterType.POSITION:
                promise = position.findPrivilege({dataId: id});
                break;
            case FilterType.ORGROLE:
                promise = orgRole.findPrivilege({dataId: id});
                break;
            case FilterType.USER:
                promise = user.findPrivilege({dataId: id});
                break;
            case FilterType.ROLE:
                promise = role.findPrivilege({dataId: id});
                break;
            case FilterType.PERSON:
                promise = person.findPrivilege({dataId: id});
                break;
            default:
                break;
        }
        promise && promise.then((res) => res.json())
            .then((res) => {
                const success = res.success;
                if (success) {
                    const data = res.data;
                    if (data === undefined || JSON.stringify(data) === '{}') {
                        this.setState({data: null, message: '尚未授予任何权限'});
                    } else {
                        this.setState({data: data});
                    }
                } else {
                    const errMessage = res.errMessage;
                    this.setState({data: null, message: errMessage, messageType: 'error'});
                }
            })
            .catch( (err) => {
                throw err;
            });
    };

    render () {
        const data = this.state.data;
        if (data === null) return <Alert message={this.state.message} type={this.state.messageType} showIcon/>;
        if (data.length === 0) return <Spin tip='loading'><Alert message={this.state.message} type={this.state.messageType} showIcon/></Spin>;
        const loop = (data) => data.map((item, n) => {
            const arr = item.split(',');
            const detail = (d) => d.map((i, k) => {
                const [type, name] = i.split('_');
                if (type === 'APP') {
                    return <span key={k+name}><Tag color="#108ee9">系统</Tag>{name}</span>;
                } else if (type === 'MENU') {
                    return <span key={k+name}><Icon type="arrow-right" /><Tag color="#87d068">菜单</Tag>{name}</span>;
                } else if (type === 'CONTROLLER') {
                    return <span key={k+name}><Icon type="arrow-right" /><Tag color="#2db7f5">请求</Tag>{name}</span>;
                } else {
                    return '';
                }
            });
            return <div style={{marginTop:'10px'}} key={n}>{detail(arr)}</div>;
        });
        const loopObj = (data) => {
            let nodes = [];
            for (let i in data) {
                if (data.hasOwnProperty(i) === true) {
                    nodes.push(<TabPane tab={i} key={i}>{loop(data[i])}</TabPane>);
                }
            }
            return nodes;
        };
        return (
            <Tabs>
                {loopObj(data)}
            </Tabs>
        );
    }
}

Privilege.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string
};

export default Privilege;
