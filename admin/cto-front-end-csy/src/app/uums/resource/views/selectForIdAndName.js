/**
 * Created by feichongzheng on 17/1/18.
 */
import React, {Component} from 'react';
import { Select } from 'antd';
import 'FayAntd/select/style/index.js';
import PropTypes from 'prop-types';

const Option = Select.Option;

class SelectForIdAndName extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const data = this.props.data;
        let values = Array.of();
        let optionNodes = data.map(
            (data, index) => {
                values[index] = data.id;
                return (
                    <Option key={index} value={data.id}>{data.name}</Option>
                );
            }
        );
        let selectedValue;
        if (values.indexOf(this.props.value) > -1) {selectedValue = this.props.value;}
        return (
            <Select style={{ width: '100%' }}
                    size={this.props.size}
                    value={selectedValue}
                    showSearch
                    allowClear={this.props.allowClear}
                    placeholder={this.props.placeholder}
                    optionFilterProp="children"
                    onChange={this.props.onChange}>
                {optionNodes}
            </Select>
        );
    }
}

SelectForIdAndName.propTypes = {
    data: PropTypes.array,
    size: PropTypes.string,
    allowClear: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default SelectForIdAndName;
