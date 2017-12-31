import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findData, receiveData} from '../actions';
import {selectVisibleMenuResourceTreeTable} from '../selector';

const FormItem = Form.Item;

class Login extends React.Component {
    componentWillMount() {
        const {receiveData} = this.props;
        receiveData(null, 'compAuth');
    }

    componentWillReceiveProps(nextProps) {
        const {compAuth: nextCompAuth = {}} = nextProps;
        if (nextCompAuth.data && nextCompAuth.data.uid) {   // 判断是否登陆
            localStorage.setItem('user', JSON.stringify(nextCompAuth.data));
            this.props.history.push('/', null);
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const {findData} = this.props;
                if (values.userName === 'admin' && values.password === 'admin') findData({
                    funcName: 'admin',
                    stateName: 'compAuth'
                });
                if (values.userName === 'guest' && values.password === 'guest') findData({
                    funcName: 'guest',
                    stateName: 'compAuth'
                });
            }
        });
    };
    gitHub = () => {
        console.log("gitHub");
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <div className="login-form">
                    <div className="login-logo">
                        <span>React Admin</span>
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{required: true, message: '请输入用户名!'}],
                            })(
                                <Input prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                       placeholder="管理员输入admin, 游客输入guest"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码!'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                       placeholder="管理员输入admin, 游客输入guest"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button"
                                    style={{width: '100%'}}>
                                登录
                            </Button>
                            或 <a href="">现在就去注册!</a>
                            <p>
                                <Icon type="github" onClick={this.gitHub}/>(第三方登录)
                            </p>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        compAuth: selectVisibleMenuResourceTreeTable(state)
    }
};
const mapDispatchToProps = dispatch => ({
    findData: bindActionCreators(findData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(Login));
