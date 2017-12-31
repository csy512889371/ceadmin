/**
 * Created by feichongzheng on 17/1/12.
 */
import React, {Component} from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Alert from 'antd/lib/alert';
import 'FayAntd/button/style/index.js';
import 'FayAntd/form/style/index.js';
import 'FayAntd/input/style/index.js';
import 'FayAntd/alert/style/index.js';

import PropTypes from 'prop-types';
import {api} from '../../../resource';
import {actions as orgStructureActions} from '../../orgStructure';
import {connect} from 'react-redux';
import {log} from '../../../../resource';

const FormItem = Form.Item;
class SaveForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            loading: false,
            message: '',
            messageType: '',
            showMessage: 'none',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const {orgId, departmentId, positionId, orgRoleId, refreshTree} = this.props;
                orgId && (values.orgId = orgId);
                departmentId && (values.departmentId = departmentId);
                positionId && (values.positionId = positionId);
                orgRoleId && (values.orgRoleId = orgRoleId);
                const startTime = new Date().getTime();
                api.user.relationSave(values)
                    .then((res) => res.json())
                    .then((res) => {
                        if (res.success) {
                            const desc = '新增人员->【姓名：'+values.name+'，标识：'+values.sn
                                +'，所属机构ID：'+orgId+'，所属部门ID：'+departmentId+'，所属职位ID：'+positionId+'，所属角色ID：'+orgRoleId+'】';
                            log.saveAction(api.person.relativePath.save, desc, new Date().getTime()-startTime, 200);
                            this.setState({showMessage: 'block', message: '保存成功', messageType: 'success', loading: false});
                            refreshTree();
                        } else {
                            this.setState({showMessage: 'block', message: res.errMessage, messageType: 'error', loading: false});
                        }
                    });
            } else {
                this.setState({ loading: false});
            }
        });
    };

    handleReset = () => {
        this.setState({showMessage: 'none', message: '', messageType: ''});
        this.props.form.resetFields();
    };

    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout='vertical' onSubmit={this.handleSubmit}>
                <FormItem label="姓名">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: '请输入姓名!',
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem label="标识">
                    {getFieldDecorator('sn', {
                        rules: [{
                            required: true, message: '请输入标识!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label="密码">
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: '请输入密码!',
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem>
                    <Alert style={{display: this.state.showMessage}} message={this.state.message} type={this.state.messageType} showIcon/>
                    <Button type="primary" loading={this.state.loading} htmlType="submit" size="default">保存</Button>
                    <Button style={{ marginLeft: 8 }} onClick={this.handleReset} size="default">
                        重置
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

SaveForm.propTypes = {
    form: PropTypes.object,
    refreshTree: PropTypes.func,
    orgId: PropTypes.string,
    departmentId: PropTypes.string,
    positionId: PropTypes.string,
    orgRoleId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
    const refreshTree = () => {
        dispatch(orgStructureActions.findOrgStructureInTree({}, false));
    };
    return {
        refreshTree: refreshTree
    }
};

export default Form.create()(connect(null, mapDispatchToProps)(SaveForm));
