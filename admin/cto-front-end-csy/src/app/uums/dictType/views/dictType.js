/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import DictTypeTable from './dictTypeTable';
import DictTypeSearch from './dictTypeSearch';

export default () => {
    return (
        <Card>
            <DictTypeSearch />
            <div className={style.dictTypeTable}>
                <DictTypeTable />
            </div>
        </Card>
    );
}
