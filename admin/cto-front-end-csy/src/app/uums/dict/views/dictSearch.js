/**
 * Created by feichongzheng on 17/1/11.
 */
import React from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import 'FayAntd/form/style/index.js';
import 'FayAntd/input/style/index.js';
import 'FayAntd/button/style/index.js';
import DictSaveForm from './dictSaveForm';

import PropTypes from 'prop-types';
import {api, ButtonSave} from '../../resource';
import {findDictForPage} from '../actions';
import {connect} from 'react-redux';
import {DictTypeSelect} from '../../dictType';

const FormItem = Form.Item;
const {saveRight} = api.dict;

const SearchForm = ({handleSubmit, form, onChange}) => {
    const {getFieldDecorator} = form;
    return (
        <Form layout='inline' onSubmit={handleSubmit}>
            <FormItem>
                {getFieldDecorator('name')(
                    <Input placeholder="名称"/>
                )}
            </FormItem>
            <FormItem>
                <div style={{width: '200px'}}>
                    {getFieldDecorator('typeId')(
                        <DictTypeSelect showSearch size="large" allowClear placeholder="请选择类型" onChange={onChange}/>
                    )}
                </div>
            </FormItem>
            <FormItem>
                <Button type="primary" icon="search" htmlType="submit" size="default">搜索</Button>
            </FormItem>
            {
                saveRight &&
                <FormItem>
                    <ButtonSave title="新增数据字典">
                        <DictSaveForm/>
                    </ButtonSave>
                </FormItem>
            }
        </Form>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    name: values.name,
                    typeId: values.typeId,
                    number: 0,
                    size: 20,
                };
                dispatch(findDictForPage(params));
            }
        });
    };

    const onChange = (value) => {
        const {form} = ownProps;
        form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    typeId: value,
                    name: values.name,
                    number: 0,
                    size: 20,
                };
                dispatch(findDictForPage(params));
            }
        });
    };

    return {
        handleSubmit: handleSubmit,
        onChange: onChange
    }
};

SearchForm.propTypes = {
    form: PropTypes.object,
};

export default Form.create()(connect(null, mapDispatchToProps)(SearchForm));
