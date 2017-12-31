/**
 * Created by feichongzheng on 17/1/12.
 */
import React, {Component} from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Alert from 'antd/lib/alert';
import InputNumber from 'antd/lib/input-number';
import 'FayAntd/button/style/index.js';
import 'FayAntd/form/style/index.js';
import 'FayAntd/input/style/index.js';
import 'FayAntd/alert/style/index.js';
import 'FayAntd/input-number/style/index.js';

import PropTypes from 'prop-types';
import {api} from '../../resource';
import {AppSelect} from '../../app';
import {MenuResourceTreeSelect} from '../../menuResource';
import {log} from '../../../resource';

const FormItem = Form.Item;

class UpdateForm extends Component {

    constructor (props) {
        super(props);
        console.log(props.data);
        this.state = {
            loading: false,
            passwordDirty: false,
            message: '',
            messageType: '',
            showMessage: 'none',
            appSelectedId: props.data.appId,
            menuId: props.data.menuId === null ? undefined : props.data.menuId,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        const {form, data, setModal, cb} = this.props;
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.id = data.id;
                const startTime = new Date().getTime();
                const promise = api.controllerResource.update(values);
                promise.then((res) => res.json())
                    .then((res) => {
                        if (res.success) {
                            const desc = '更新请求资源->【ID：'+values.id+'，名称：'+values.controllerName+'，标识符：'
                                +values.controllerSn+'，url：'+values.controllerUrlMapping
                                +'，排序号：'+values.controllerOrder+'，所属系统'+values.application.id+'，所属菜单'+values.menu.id+'】';
                            log.saveAction(api.controllerResource.relativePath.update, desc, new Date().getTime()-startTime, 200);
                            this.setState({showMessage: 'block', message: '保存成功', messageType: 'success', loading: false});
                            setModal(false);
                            cb();
                        } else {
                            this.setState({showMessage: 'block', message: res.errMessage, messageType: 'error', loading: false});
                        }
                    })
                    .catch( (err) => {
                        throw err;
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

    appHandleChange = (value) => {
        if (value === undefined) {value = '0';}
        this.setState({ appSelectedId: value, menuId: undefined });
    };

    render () {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
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
                    {getFieldDecorator('controllerName', {
                        rules: [{
                            required: true, message: '请输入菜单名称!',
                        }],
                        initialValue: data.name,
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="标识符">
                    {getFieldDecorator('controllerSn', {
                        rules: [{
                            required: true, message: '请输入标识符!',
                        }],
                        initialValue: data.sn,
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="UrlMapping">
                    {getFieldDecorator('controllerUrlMapping', {
                        rules: [{
                            required: true, message: '请输入UrlMapping!',
                        }],
                        initialValue: data.urlMapping,
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="排序号">
                    {getFieldDecorator('controllerOrder', {
                        initialValue: data.order,
                    })(
                        <InputNumber min={1} max={100000} style={{width: '100%'}}/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="所属系统">
                    {getFieldDecorator('application.id', {
                        rules: [{
                            required: true, message: '请选择所属系统!',
                        }],
                        initialValue: data.appId === null ? undefined : data.appId,
                    })(
                        <AppSelect allowClear onChange={this.appHandleChange}/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="所属菜单">
                    {getFieldDecorator('menu.id', {
                        initialValue: this.state.menuId,
                    })(
                        <MenuResourceTreeSelect deleteId={data.id} showSearch allowClear placeholder="请选择菜单资源" appId={this.state.appSelectedId}/>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
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

UpdateForm.propTypes = {
    data: PropTypes.object,
    form: PropTypes.object,
    cb: PropTypes.func,
    setModal: PropTypes.func,
};

export default Form.create()(UpdateForm);
