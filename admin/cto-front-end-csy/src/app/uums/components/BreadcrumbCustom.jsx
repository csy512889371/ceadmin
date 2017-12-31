import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router-dom';

class BreadcrumbCustom extends React.Component {
    componentDidMount() {
    }

    render() {
        const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || '';
        const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || '';
        return (
            <span className="cloud-box">
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item><Link to={'/'}>首页</Link></Breadcrumb.Item>
                        {first}
                        {second}
                </Breadcrumb>
            </span>
        )
    }
}

export default BreadcrumbCustom;
