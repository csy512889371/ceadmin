/**
 * Created by feichongzheng on 16/12/15.
 */
import React, {Component} from 'react';
import Menu from 'antd/lib/menu';
import 'FayAntd/menu/style/index.js';
import style from './style.css';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {appName} from '../../../appInfo';
import {user} from '../../../resource';

let pathname;

class NavTop extends Component {

    static propTypes = {
        location: PropTypes.any,
        history: PropTypes.object,
    };

    constructor (props) {
        super(props);
        const {location} = props;
        pathname = location.pathname;
        pathname = pathname.indexOf('/') === 0 ? pathname : '/' + pathname;
    }

    handleClick = (e) => {
        let key = e.key;
        if (key !== undefined) {
            if (key.indexOf('/prevent') !== 0) {
                const {history} = this.props;
                history.push(key, null);
            }
        }
    };

    changePath = (e, path) => {
        e.stopPropagation();
        const {history, location} = this.props;
        const {pathname} = location;
        if(path === '/login'){
            user.goToLogin(history, pathname);
        }else{
            history.push(path, {nextPathname: pathname});
        }
    };

    logout (e) {
        e.stopPropagation();
        const {history, location} = this.props;
        const {pathname} = location;
        user.logout(history, pathname);
    }

    render () {
        const loginUser = user.loginUser();
        return (
            <Menu onClick={this.handleClick}
                  selectedKeys={[pathname]}
                  mode="horizontal"
                  className={style.menu}
                  id="nav-top-menu"
            >
                <Menu.Item key="/">
                    <div className={style.log + ' waves-effect'}>
                        <img width="30px" src="assets/images/logo/80x80.png" className={style.logImg} />
                        {appName}
                    </div>
                </Menu.Item>
                {loginUser ?
                    [
                        <Menu.Item key="/prevent1" style={{float: 'right', marginRight: '50px'}}>
                            <div className={style.register + ' waves-effect'} onClick={(e) => {this.logout(e);}}>退出</div>
                        </Menu.Item>,
                        <Menu.Item key="/prevent2" style={{float: 'right'}}>
                            <div className={style.userInfo + ' waves-effect'}>{loginUser.nickname}</div>
                        </Menu.Item>
                    ] :
                    <Menu.Item key="/prevent3" style={{float: 'right', marginRight: '50px'}}>
                        <div className={style.login + ' waves-effect'} onClick={(e) => {this.changePath(e, '/login');}}>登录</div>
                    </Menu.Item>
                }
            </Menu>
        );
    }
}

export default withRouter(NavTop);
