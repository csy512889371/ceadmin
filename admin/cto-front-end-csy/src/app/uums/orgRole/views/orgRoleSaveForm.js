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
import {findOrgRoleForPage} from '../actions';
import {connect} from 'react-redux';
import {OrgTreeSelect} from '../../org';
import {log} from '../../../resource';
const FormItem = Form.Item;
const {save} = api.orgRole;

class SaveForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            loading: false,
            passwordDirty: false,
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
                const startTime = new Date().getTime();
                save(values).then((res) => res.json())
                    .then((res) => {
                        if (res.success) {
                            const desc = '新增角色->【名称：'+values.name+'，标识符：'
                                +values.sn+'，所属机构：'+values.orgId+'】';
                            log.saveAction(api.orgRole.relativePath.save, desc, new Date().getTime()-startTime, 200);
                            this.setState({showMessage: 'block', message: '保存成功', messageType: 'success', loading: false});
                            const {params, dispatch, setModal} = this.props;
                            setModal(false);
                            dispatch(findOrgRoleForPage(params));
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
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="名称">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: '请输入名称!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="标识符">
                    {getFieldDecorator('sn', {
                        rules: [{
                            required: true, message: '请输入标识符!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="所属机构">
                    {getFieldDecorator('orgId', {
                        initialValue: undefined,
                    })(
                        <OrgTreeSelect allowClear/>
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

SaveForm.propTypes = {
    form: PropTypes.object,
    setModal: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        params: state.uumsOrgRole.params,
    };
};

export default Form.create()(connect(mapStateToProps)(SaveForm));
