/**
 * Created by feichongzheng on 17/10/11.
 */
import React from 'react';

export default () => {
    return [{
        title: '应用系统',
        dataIndex: 'app',
    }, {
        title: '模块',
        dataIndex: 'opResource',
    // }, {
    //     title: '操作类型',
    //     dataIndex: 'opType',
    }, {
        title: '描述',
        dataIndex: 'opDesc',
        width: '400px'
    }, {
        title: '用户',
        dataIndex: 'username',
    }, {
        title: '级别',
        dataIndex: 'logLevel',
    }, {
        title: '类型',
        dataIndex: 'logType',
    // }, {
    //     title: '后端访问路径',
    //     dataIndex: 'backEndAccessPath',
    }, {
        title: '操作时间',
        dataIndex: 'opTime',
    }, {
        title: '执行时间',
        dataIndex: 'execTime',
    }, {
        title: '结果',
        dataIndex: 'opResult',
    }];
}