/**
 * Created by feichongzheng on 16/12/18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {user} from '../../../resource';
import {withRouter} from 'react-router-dom';
import {findUumsResourceAuth} from '../actions';
import {selectVisibleUums} from '../selector';
import {
    FIND_UUMS_RESOURCE_AUTH_FETCH,
    FIND_UUMS_RESOURCE_AUTH_SUCCESS,
    FIND_UUMS_RESOURCE_AUTH_ERROR
} from '../actionTypes';
import {E401D3, E404} from '../../../error';
import {UumsRouterPaths, UumsCompsRouterPaths} from '../../constants';
import {view as App} from '../../app';
import {view as Org} from '../../org';
import {view as Department} from '../../department';
import {view as Position} from '../../position';
import {view as OrgRole} from '../../orgRole';
import {view as User} from '../../user';
import {view as Role} from '../../role';
import {view as Person} from '../../person';
import {view as MenuResource} from '../../menuResource';
import {view as ControllerResource} from '../../controllerResource';
import {view as UnifyManage} from '../../unifyManage';
import {view as Dict} from '../../dict';
import {view as DictType} from '../../dictType';
import {view as Log} from '../../log';

import Buttons from '../../components/ui/Buttons';
import Icons from '../../components/ui/Icons';
import Spins from '../../components/ui/Spins';
import Modals from '../../components/ui/Modals';
import Notifications from '../../components/ui/Notifications';
import Tabs from '../../components/ui/Tabs';
import Wysiwyg from '../../components/ui/Wysiwyg';
import Draggable from '../../components/ui/Draggable';
import Gallery from '../../components/ui/Gallery';

import CompBasicAnimations from '../../components/animation/BasicAnimations';
import CompExampleAnimations from '../../components/animation/ExampleAnimations';

import CompBasicTable from '../../components/tables/BasicTables';
import CompAdvancedTable from '../../components/tables/AdvancedTables';
import CompAsynchronousTable from '../../components/tables/AsynchronousTable';

import CompBasicForm from '../../components/forms/BasicForm';

import CompEcharts from '../../components/charts/Echarts';
import CompRecharts from '../../components/charts/Recharts';

import CompAuthBasic from '../../components/auth/Basic';

import {view as CompMusics} from '../../components/music';

class UumsRouter extends Component {

    componentWillMount() {
        const {auth, goToLogin} = this.props;
        if (user.isLogin()) {
            auth();
        } else {
            goToLogin();
        }
    }

    shouldComponentUpdate(nextProps) {
        const pathname = this.props.location.pathname;
        const nextPathname = nextProps.location.pathname;
        const type = this.props.uums.type;
        const nextType = nextProps.uums.type;
        return !(pathname === nextPathname && type === nextType);
    }

    render() {
        const {uums, getUumsComponent} = this.props;
        const {type} = uums;
        if (user.isLogin()) {
            switch (type) {
                case FIND_UUMS_RESOURCE_AUTH_FETCH:
                    return <div>loading...</div>;
                case FIND_UUMS_RESOURCE_AUTH_SUCCESS:
                    return <div>{getUumsComponent(uums)}</div>;
                case FIND_UUMS_RESOURCE_AUTH_ERROR:
                    return <div>{uums.message}</div>;
                default:
                    return <div>无可显示内容</div>;
            }
        } else {
            return <div>需要登录</div>;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        uums: selectVisibleUums(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const getChildrenMatchUrl = (pathname) => {
        switch (pathname) {
            case UumsRouterPaths.APP:
                return <App {...ownProps}/>;
            case UumsRouterPaths.ORG:
                return <Org {...ownProps}/>;
            case UumsRouterPaths.DEPARTMENT:
                return <Department {...ownProps}/>;
            case UumsRouterPaths.POSITION:
                return <Position {...ownProps}/>;
            case UumsRouterPaths.ORGROLE:
                return <OrgRole {...ownProps}/>;
            case UumsRouterPaths.PERSON:
                return <Person {...ownProps}/>;
            case UumsRouterPaths.MENURESOURCE:
                return <MenuResource {...ownProps}/>;
            case UumsRouterPaths.CONTROLLERRESOURCE:
                return <ControllerResource {...ownProps}/>;
            case UumsRouterPaths.ROLE:
                return <Role {...ownProps}/>;
            case UumsRouterPaths.UNIFYMANAGE:
                return <UnifyManage {...ownProps}/>;
            case UumsRouterPaths.DICT:
                return <Dict {...ownProps}/>;
            case UumsRouterPaths.DICTTYPE:
                return <DictType {...ownProps}/>;
            case UumsRouterPaths.LOG:
                return <Log {...ownProps}/>;
            case UumsRouterPaths.USER:
                return <User {...ownProps}/>;

            case UumsCompsRouterPaths.Buttons:
                return <Buttons {...ownProps}/>;
            case UumsCompsRouterPaths.Icons:
                return <Icons {...ownProps}/>;
            case UumsCompsRouterPaths.Spins:
                return <Spins {...ownProps}/>;
            case UumsCompsRouterPaths.Modals:
                return <Modals {...ownProps}/>;
            case UumsCompsRouterPaths.Notifications:
                return <Notifications {...ownProps}/>;
            case UumsCompsRouterPaths.Tabs:
                return <Tabs {...ownProps}/>;
            case UumsCompsRouterPaths.Wysiwyg:
                return <Wysiwyg {...ownProps}/>;
            case UumsCompsRouterPaths.Drags:
                return <Draggable {...ownProps}/>;
            case UumsCompsRouterPaths.Gallery:
                return <Gallery {...ownProps}/>;

            case UumsCompsRouterPaths.CompBasicAnimations:
                return <CompBasicAnimations {...ownProps}/>;
            case UumsCompsRouterPaths.CompExampleAnimations:
                return <CompExampleAnimations {...ownProps}/>;

            case UumsCompsRouterPaths.CompBasicTable:
                return <CompBasicTable {...ownProps}/>;
            case UumsCompsRouterPaths.CompAdvancedTable:
                return <CompAdvancedTable {...ownProps}/>;
            case UumsCompsRouterPaths.CompAsynchronousTable:
                return <CompAsynchronousTable {...ownProps}/>;

            case UumsCompsRouterPaths.CompBasicForm:
                return <CompBasicForm {...ownProps}/>;

            case UumsCompsRouterPaths.CompEcharts:
                return <CompEcharts {...ownProps}/>;
            case UumsCompsRouterPaths.CompRecharts:
                return <CompRecharts {...ownProps}/>;

            case UumsCompsRouterPaths.CompAuthBasic:
                return <CompAuthBasic {...ownProps}/>;

            case UumsCompsRouterPaths.CompMusics:
                return <CompMusics {...ownProps}/>;

            default:
                return <E404 {...ownProps}/>;
        }
    };

    const getUumsComponent = (uums) => {
        const {pathname} = ownProps.location;
        let flag = false;
        const result = uums.data;
        const success = result.success;
        if (success) {
            const data = result.data;
            const menu = data.menu;
            const controller = data.controller.voList;
            const isControlled = data.isControlled.voList;
            window.localStorage.removeItem('controller');
            window.localStorage.removeItem('isControlled');
            window.localStorage.setItem('controller', JSON.stringify(controller));
            window.localStorage.setItem('isControlled', JSON.stringify(isControlled));
            let menuList = menu.voList;

            for (let i = 0; i < menuList.length; i++) {
                if (menuList[i].url === pathname) {
                    flag = true;
                    break;
                }
            }
            return flag ? getChildrenMatchUrl(pathname) : <E401D3/>;
        } else {
            const errMessage = result.errMessage;
            return <div>{errMessage}</div>;
        }
    };

    const auth = () => {
        dispatch(findUumsResourceAuth());
    };

    const goToLogin = () => {
        const {location, history} = ownProps;
        const {pathname} = location;
        user.goToLogin(history, pathname);
    };

    return {
        getUumsComponent: getUumsComponent,
        goToLogin: goToLogin,
        auth: auth,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UumsRouter));
