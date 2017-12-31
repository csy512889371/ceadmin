/**
 * Created by feichongzheng on 17/10/11.
 */
import React from 'react';
import DictTypeUpdateForm from './dictTypeUpdateForm';
import {api, ADelete, AvailableSwitch, AModal} from '../../resource';

import {FilterType} from '../../constants';

const {updateRight, deleteRight} = api.dictType;
const type = FilterType.DICTTYPE;

export default (refresh) => {
    return [{
        title: '编码',
        dataIndex: 'code',
    }, {
        title: '名称',
        dataIndex: 'value',
    }, {
        title: '是否可用',
        render: (text, record) => (
            <AvailableSwitch dataId={record.id} isAvailable={record.isAvailable} type={type}/>
        ),
    }, {
        title: '描述',
        dataIndex: 'desc',
    }, {
        title: '操作',
        render: (text, record) => {
            return (
                <span>
                    {
                        updateRight &&
                        <span>
                            <AModal title="修改数据字典类型" text="修改">
                                <DictTypeUpdateForm cb={() => {refresh();}} data={record}/>
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
