/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Table from 'antd/lib/table';
import 'FayAntd/table/style/index.js';
import {connect} from 'react-redux';
import {findLogForPage} from '../actions';
import {FIND_LOG_FOR_PAGE_FETCH, FIND_LOG_FOR_PAGE_SUCCESS, FIND_LOG_FOR_PAGE_ERROR} from '../actionTypes';
import {selectVisibleLogPage} from '../selector';
import LogTableColumns from './logTableColumns';

let tableState = {
    bordered: false,
    loading: true,
    pagination: true,
    size: 'middle',
    scroll: undefined,
};

let local = {
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText: '暂无数据',
};

const LogTable = ({uumsLog, logData}) => {
        const {type, message} = uumsLog;
        let dataSource = [];
        let pagination = {};
        switch (type) {
            case FIND_LOG_FOR_PAGE_FETCH:
                tableState.loading = true;
                local.emptyText = '获取数据中...';
                break;
            case FIND_LOG_FOR_PAGE_SUCCESS:
                tableState.loading = false;
                const data = logData(uumsLog);
                dataSource = data.dataSource;
                pagination = data.pagination;
                break;
            case FIND_LOG_FOR_PAGE_ERROR:
                tableState.loading = false;
                local.emptyText = message;
                break;
            default:
                tableState.loading = false;
                local.emptyText = '暂无数据';
                break;
        }
        return (
            <Table rowKey={(record) => record.id}
                   {...tableState}
                   expandedRowRender={(record) =>
                       [
                           <p key={record.id+'1'}>IP：{record.ip}</p>,
                           <p key={record.id+'2'}>前端访问路径：{record.frontEndAccessPath}</p>,
                           <p key={record.id+'3'}>浏览器：{record.browser}</p>,
                           <p key={record.id+'4'}>操作系统：{record.opSystem}</p>
                       ]
                   }
                   columns={LogTableColumns()}
                   locale={local}
                   dataSource={dataSource}
                   pagination={pagination} />
        );
};

const mapStateToProps = (state) => {
    return {
        uumsLog: selectVisibleLogPage(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    const logData = (uumsLog) => {
        const result = uumsLog.data;
        const success = result.success;
        if (success) {
            const {params} = uumsLog;
            const data = result.data;
            local.emptyText = '暂无数据';
            return {
                dataSource: data.pageData,
                pagination: {
                    current: data.currentPage + 1,
                    showQuickJumper: true,
                    total: data.totalRows,
                    pageSize: data.pageSize,
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '20', '30', '40'],
                    onShowSizeChange: (current, pageSize) => {
                        let newParams = {};
                        Object.assign(newParams, params);
                        newParams.number = current - 1;
                        newParams.size = pageSize;
                        dispatch(findLogForPage(newParams));
                    },
                    onChange: (current) => {
                        let newParams = {};
                        Object.assign(newParams, params);
                        newParams.number = current - 1;
                        dispatch(findLogForPage(newParams));
                    },
                },
            };
        } else {
            local.emptyText = result.errMessage;
            return {
                dataSource: [],
                pagination: {},
            };
        }
    };

    return {
        logData: logData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogTable);
