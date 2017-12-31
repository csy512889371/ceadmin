/**
 * Created by feichongzheng on 17/10/11.
 */
import React from 'react';
import DictUpdateForm from './dictUpdateForm';
import {api, ADelete, AvailableSwitch, AModal} from '../../resource';
import {FilterType} from '../../constants';

const type = FilterType.DICT;
const {updateRight, deleteRight} = api.dict;
export default (refresh) => {
    return [{
        title: '序号',
        dataIndex: 'serial',
    }, {
        title: '编码',
        dataIndex: 'code',
    }, {
        title: '名称',
        dataIndex: 'value',
    }, {
        title: '类型',
        dataIndex: 'typeName',
    }, {
        title: '是否可用',
        render: (text, record) => (
            <AvailableSwitch dataId={record.id} isAvailable={record.isAvailable} type={type}/>
        ),
    }, {
        title: '操作',
        render: (text, record) => {
            return (
                <span>
                    {
                        updateRight &&
                        <span>
                            <AModal title="修改数据字典" text="修改">
                                <DictUpdateForm cb={() => {refresh();}} data={record}/>
                            </AModal>
                            {deleteRight && <span className="ant-divider" />}
                        </span>
                    }
                    {
                        deleteRight &&
                        <ADelete dataId={record.id} type={type} cb={() => {refresh();}}/>
                    }
                </span>
            );
        },
    }];
}
