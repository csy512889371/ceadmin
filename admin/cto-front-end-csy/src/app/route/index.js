import 'node-waves/src/less/waves.less';
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {UumsRouter} from '../uums';
import {view as Home} from '../home';
import {Layout12} from '../layout';
import {view as Login} from '../login';
import {view as CompLogin} from '../uums/components/pages';
import CompRouterEnter from '../uums/components/auth/RouterEnter';

import {RouterPaths} from '../constants';

const history = createBrowserHistory();

const HomePage = (props) => {
    return (
        <Layout12>
            <Home {...props}/>
        </Layout12>
    );
};

const UumsPage = (props) => {
    return (
        <Layout12>
            <UumsRouter {...props}/>
        </Layout12>
    );
};

const CompRouterEnterPage = (props) => {
    return (
        <Layout12>
            <CompRouterEnter {...props}/>
        </Layout12>
    );
};

export default class CRouter extends Component {

    /**
     * 测试路由权限
     */
    requireAuth = (permission, history, component) => {
        const {store} = this.props;
        const compAuth = store.getState().compLoginData;
        console.log(compAuth);
        if (!compAuth || !compAuth.data.permissions.includes(permission)) {
            history.push('/compLogin', null);
        }
        return component;
    };

    render() {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact strict path="/" component={HomePage}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/compLogin' component={CompLogin}/>
                    <Route path='/comp/compRouterEnter' component={(props) => this.requireAuth('auth/testPage', props.history, <CompRouterEnterPage {...props} />)}/>
                    <Route path={RouterPaths.UUMS} component={UumsPage}/>
                </Switch>
            </ConnectedRouter>
        )
    }
}

