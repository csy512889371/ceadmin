/**
 * Created by feichongzheng on 17/1/11.
 */
import React, {Component} from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import DatePicker from 'antd/lib/date-picker';
import moment from 'moment';
import 'FayAntd/form/style/index.js';
import 'FayAntd/input/style/index.js';
import 'FayAntd/button/style/index.js';
import 'FayAntd/date-picker/style/index.js';

import PropTypes from 'prop-types';
import {findLogForPage} from '../actions';
import {connect} from 'react-redux';
import {date} from '../../../resource';
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

const FormItem = Form.Item;

class SearchForm extends Component {

    componentDidMount(){
        this.props.init();
    }

    render () {
        const {handleSubmit, form} = this.props;
        const {getFieldDecorator} = form;
        const startDate = date.getDayStartDateWithDiff(-86400000);
        const endDate = date.getTodayEndDate();
        return (
            <Form layout='inline' onSubmit={handleSubmit}>
                <FormItem>
                    {getFieldDecorator('username')(
                        <Input placeholder="用户名"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('rangeDate', {
                        initialValue: [moment(startDate, dateFormat), moment(endDate, dateFormat)],
                    })(
                        <RangePicker
                            format={dateFormat}
                        />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" icon="search" htmlType="submit" size="default">搜索</Button>
                </FormItem>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    username: values.username,
                    rangeDate: values.rangeDate,
                    number: 0,
                    size: 20,
                };
                dispatch(findLogForPage(params));
            }
        });
    };

    const init = () => {
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    username: values.username,
                    rangeDate: values.rangeDate,
                    number: 0,
                    size: 20,
                };
                dispatch(findLogForPage(params));
            }
        });
    };

    return {
        handleSubmit: handleSubmit,
        init: init
    }
};

SearchForm.propTypes = {
    form: PropTypes.object,
};

export default Form.create()(connect(null, mapDispatchToProps)(SearchForm));
