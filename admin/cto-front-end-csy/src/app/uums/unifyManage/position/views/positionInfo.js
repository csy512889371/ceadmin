/**
 * Created by feichongzheng on 17/1/12.
 */
import React from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import 'FayAntd/button/style/index.js';
import 'FayAntd/form/style/index.js';

import style from './style.css';
import PositionUpdateForm from './positionUpdateForm';
import Popconfirm from 'antd/lib/popconfirm';
import 'FayAntd/popconfirm/style/index.js';
import {api, AssignAndUnAssignPerson, ButtonModal} from '../../../resource';
import {actions as orgStructureActions} from '../../orgStructure';
import {connect} from 'react-redux';
import {FilterType} from '../../../constants';
import {actions as unitInfoActions} from '../../unitInfo';
import message from 'antd/lib/message';
import 'FayAntd/message/style/index.js';
import {findByIdForUnifyPosition, showUpdatePageForUnifyPosition} from '../actions';
import {FIND_BY_ID_FOR_UNIFY_POSITION_FETCH, FIND_BY_ID_FOR_UNIFY_POSITION_SUCCESS, FIND_BY_ID_FOR_UNIFY_POSITION_ERROR} from '../actionTypes';

const FormItem = Form.Item;

const PositionInfo = ({id, type, res, update, showUpdatePage, remove, getData, refreshOrgStructure}) => {
    switch (type) {
        case FIND_BY_ID_FOR_UNIFY_POSITION_FETCH:
            return <div>玩命地加载中</div>;
        case FIND_BY_ID_FOR_UNIFY_POSITION_SUCCESS:
            if (res.success) {
                const {data} = res;
                if (data) {
                    if (update) {
                        return <PositionUpdateForm/>;
                    }
                    const {name, sn} = data;
                    return (
                        <Form>
                            <div>
                                <FormItem label="名称：">
                                    <label className={style.formLable}>{name}</label>
                                </FormItem>
                                <FormItem label="标识符：">
                                    <label className={style.formLable}>{sn}</label>
                                </FormItem>
                            </div>
                            <FormItem>
                                <Button style={{ marginLeft: 8 }} onClick={showUpdatePage} size="default">
                                    修改
                                </Button>
                                <Popconfirm title="您确认删除?" onConfirm={() => remove(id)} okText="确认" cancelText="取消">
                                    <Button style={{ marginLeft: 8 }} size="default">
                                        删除
                                    </Button>
                                </Popconfirm>
                                <ButtonModal style={{ marginLeft: 8 }} title="分配人员" text="分配人员" width="80%">
                                    <AssignAndUnAssignPerson type={FilterType.POSITION} dataId={id} cb={refreshOrgStructure}/>
                                </ButtonModal>
                            </FormItem>
                        </Form>
                    );
                } else {
                    return <div>未获取到该职位信息数据，请刷新后重试</div>;
                }
            } else {
                return <div>{res.errMessage}</div>;
            }

        case FIND_BY_ID_FOR_UNIFY_POSITION_ERROR:
            return <div>加载失败</div>;
        default:
            getData(id);
            return <div>未加载数据</div>;
    }
};

const mapStateToProps = (state) => {
    const {id, type, res, update} = state.uumsUnifyPosition;
    return {
        type: type,
        res: res,
        update: update,
        id: id
    }
};

const mapDispatchToProps = (dispatch) => {

    const getData = (id) => {
        dispatch(findByIdForUnifyPosition(id));
    };

    const showUpdatePage = () => {
        dispatch(showUpdatePageForUnifyPosition(true));
    };

    const remove = (id) => {
        api.position.remove({ids: [id]})
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    dispatch(orgStructureActions.findOrgStructureInTree({}, false));
                    dispatch(unitInfoActions.changeForUnitInfo('', '删除成功'));
                } else {
                    message.error('删除失败！');
                }
            });
    };

    const refreshOrgStructure = () => {
        dispatch(orgStructureActions.findOrgStructureInTree({}, false));
    };

    return {
        getData: getData,
        showUpdatePage: showUpdatePage,
        remove: remove,
        refreshOrgStructure: refreshOrgStructure
    }
};

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(PositionInfo));
