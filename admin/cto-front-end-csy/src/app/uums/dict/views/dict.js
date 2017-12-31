/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import DictTable from './dictTable';
import DictSearch from './dictSearch';

export default () => {
    return (
        <Card>
            <DictSearch />
            <div className={style.dictTable}>
                <DictTable />
            </div>
        </Card>
    );
}
