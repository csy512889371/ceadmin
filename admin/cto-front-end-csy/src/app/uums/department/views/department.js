/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import DepartmentTable from './departmentTable';
import DepartmentSearch from './departmentSearch';

export default () => {
    return (
        <Card>
            <DepartmentSearch />
            <div className={style.departmentTable}>
                <DepartmentTable />
            </div>
        </Card>
    );
}
