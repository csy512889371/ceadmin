/**
 * Created by feichongzheng on 17/1/18.
 */
import React from 'react';
import SelectForIdAndName from '../../views/selectForIdAndName';
import {app} from '../../api';
import {connect} from 'react-redux';
import {findAppsForAuth, findMenuForAuth, findControllerForAuth, changeAppForAuth, selectMenuForAuth} from '../actions';

const AppSelect = ({size, allowClear, appId, apps, onChange}) => {
    return (
        <SelectForIdAndName size={size}
                            allowClear={allowClear}
                            value={appId}
                            placeholder="请选择应用系统"
                            data={apps}
                            onChange={onChange}/>
    );
};

const mapStateToProps = (state) => {
    const {appId} = state.uumsAuth;
    const {apps} = state.uumsAuth;
    return {
        appId: appId,
        apps: apps
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const getData = () => {
        app.findAppForAuthSelect({})
            .then((res) => res.json())
            .then((res) => {
                const data = res.data;
                const {voList} = data;
                let value = (voList.length === 0 || ownProps.allowClear) ? ownProps.value : voList[0].id;
                dispatch(findAppsForAuth(voList, value));
                const {type, dataId} = ownProps;
                const params = {appId: value, dataId: dataId};
                dispatch(findMenuForAuth(type, params));
            })
            .catch( (err) => {
                throw err;
            });
    };

    const onChange = (value) => {
        dispatch(changeAppForAuth(value));
        const {type, dataId} = ownProps;
        dispatch(findMenuForAuth(type, {appId: value, dataId: dataId}));
        dispatch(selectMenuForAuth([]));
        dispatch(findControllerForAuth(type, {appId: value, dataId: dataId, menuId: '-1'}));
    };

    getData();

    return {
        onChange: onChange
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppSelect);
