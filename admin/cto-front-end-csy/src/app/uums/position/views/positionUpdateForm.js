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
import {api} from '../../resource';
import {OrgTreeSelect} from '../../org';
import {DepartmentSelect} from '../../department';

import {log} from '../../../resource';

const FormItem = Form.Item;
const {update} = api.position;

class UpdateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            passwordDirty: false,
            message: '',
            messageType: '',
            showMessage: 'none',
            orgId: props.data.orgId,
            departmentId: props.data.departmentId === null ? undefined : props.data.departmentId,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.id = this.props.data.id;
                const startTime = new Date().getTime();
                update(values).then((res) => res.json())
                    .then((res) => {
                        if (res.success) {
                            const desc = '更新职位->【ID：' + values.id + '，名称：' + values.name + '，标识符：' + values.sn
                                + '，所属机构ID：' + values.orgId + '，所属部门ID：' + values.departmentId + '】';
                            log.saveAction(api.position.relativePath.update, desc, new Date().getTime() - startTime, 200);
                            this.setState({
                                showMessage: 'block',
                                message: '保存成功',
                                messageType: 'success',
                                loading: false
                            });
                            const {setModal, cb} = this.props;
                            setModal(false);
                            cb();
                        } else {
                            this.setState({
                                showMessage: 'block',
                                message: res.errMessage,
                                messageType: 'error',
                                loading: false
                            });
                        }
                    })
                    .catch((err) => {
                        throw err;
                    });
            } else {
                this.setState({loading: false});
            }
        });
    };

    handleReset = () => {
        this.setState({showMessage: 'none', message: '', messageType: ''});
        this.props.form.resetFields();
    };

    orgOnChange = (value) => {
        this.setState({
            orgId: value,
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 14,
                offset: 6,
            },
        };
        const data = this.props.data;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="名称">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: '请输入名称!',
                        }],
                        initialValue: data.name,
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="标识符">
                    {getFieldDecorator('sn', {
                        rules: [{
                            required: true, message: '请输入标识符!',
                        }],
                        initialValue: data.sn,
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="所属机构">
                    {getFieldDecorator('orgId', {
                        initialValue: data.orgId === null ? undefined : data.orgId,
                    })(
                        <OrgTreeSelect showSearch allowClear placeholder="请选择所属机构" onChange={this.orgOnChange}/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="所属部门">
                    {getFieldDecorator('departmentId', {
                        initialValue: this.state.departmentId,
                    })(
                        <DepartmentSelect orgId={this.state.orgId} allowClear placeholder="请选择所属部门"/>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Alert style={{display: this.state.showMessage}} message={this.state.message}
                           type={this.state.messageType} showIcon/>
                    <Button type="primary" loading={this.state.loading} htmlType="submit" size="default">保存</Button>
                    <Button style={{marginLeft: 8}} onClick={this.handleReset} size="default">
                        重置
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

UpdateForm.propTypes = {
    data: PropTypes.object,
    form: PropTypes.object,
    cb: PropTypes.func,
    setModal: PropTypes.func,
};

export default Form.create()(UpdateForm);
