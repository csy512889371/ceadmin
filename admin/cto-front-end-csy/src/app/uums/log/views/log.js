/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import LogTable from './logTable';
import LogSearch from './logSearch';

export default () => {
    return (
        <Card>
            <LogSearch />
            <div className={style.logTable}>
                <LogTable />
            </div>
        </Card>
    );
}
