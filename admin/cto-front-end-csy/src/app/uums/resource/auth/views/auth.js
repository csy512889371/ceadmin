/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import AppSelect from './appSelect';
import Menu from './menu';
import Controller from './controller';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import {org, department, position, orgRole, user, role, person} from '../../api';
import {FilterType} from '../../../constants';

export default ({type, dataId}) => {
    let menuRight = false;
    let controllerRight = false;

    switch (type) {
        case FilterType.ORG:
            menuRight = org.addMenuRight;
            controllerRight = org.addControllerResourceRight;
            break;
        case FilterType.DEPARTMENT:
            menuRight = department.addMenuRight;
            controllerRight = department.addControllerResourceRight;
            break;
        case FilterType.POSITION:
            menuRight = position.addMenuRight;
            controllerRight = position.addControllerResourceRight;
            break;
        case FilterType.ORGROLE:
            menuRight = orgRole.addMenuRight;
            controllerRight = orgRole.addControllerResourceRight;
            break;
        case FilterType.USER:
            menuRight = user.addMenuRight;
            controllerRight = user.addControllerResourceRight;
            break;
        case FilterType.ROLE:
            menuRight = role.addMenuRight;
            controllerRight = role.addControllerResourceRight;
            break;
        case FilterType.PERSON:
            menuRight = person.addMenuRight;
            controllerRight = person.addControllerResourceRight;
            break;
        default:
            break;
    }

    return (
        <div>
            <div className={style.app}>
                <AppSelect dataId={dataId} type={type}/>
            </div>
            <div style={{display: 'inline-block'}}>
                {
                    menuRight &&
                    <Card title="菜单资源" className={style.menuCard}>
                        <Menu dataId={dataId} type={type}/>
                    </Card>
                }
                {
                    controllerRight &&
                    <Card title="请求资源" className={style.controlCard}>
                        <Controller dataId={dataId} type={type}/>
                    </Card>
                }
            </div>
        </div>
    );
};
