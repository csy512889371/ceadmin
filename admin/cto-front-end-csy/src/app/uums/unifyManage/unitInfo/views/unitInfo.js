/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import {view as Org} from '../../org'
import {view as Department} from '../../department'
import {view as Position} from '../../position'
import {view as App} from '../../app'
import {view as OrgRole} from '../../orgRole'
import {view as MenuResource} from '../../menuResource'
import {view as ControllerResource} from '../../controllerResource'
import {view as Person} from '../../person'
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import {selectVisibleUnitInfoPage} from '../selector';
import {connect} from 'react-redux';
import {UnifyType} from '../../constants';
import style from './style.css';

const UnitInfo = ({uumsUnifyUnitInfo}) => {
    const {contentType, title} = uumsUnifyUnitInfo;
    let loading = false;
    let node = '';
    let cardTitle = title;
    switch (contentType) {
        case UnifyType.ORG:
            node = <Org/>;
            break;
        case UnifyType.DEPARTMENT:
            node = <Department/>;
            break;
        case UnifyType.POSITION:
            node = <Position/>;
            break;
        case UnifyType.APP:
            node = <App/>;
            break;
        case UnifyType.ORGROLE:
            node = <OrgRole/>;
            break;
        case UnifyType.MENU:
            node = <MenuResource/>;
            break;
        case UnifyType.CONTROLLER:
            node = <ControllerResource/>;
            break;
        case UnifyType.USER:
            node = <Person/>;
            break;
        default :
            loading = true;
            cardTitle = '请选中右边的一项';
            node = 'Whatever content';
            break;
    }
    return (
        <Card loading={loading} className={style.unitInfo} title={cardTitle}>
            {node}
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        uumsUnifyUnitInfo: selectVisibleUnitInfoPage(state)
    }
};

export default connect(mapStateToProps)(UnitInfo);
