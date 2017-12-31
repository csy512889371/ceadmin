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
import PositionSaveForm from './positionSaveForm';

import PropTypes from 'prop-types';
import {api, ButtonSave} from '../../resource';
import {findPositionForPage} from '../actions';
import {connect} from 'react-redux';
import {OrgTreeSelect} from '../../org';
import {DepartmentSelect} from '../../department';

const {saveRight} = api.position;
const FormItem = Form.Item;

const SearchForm = ({handleSubmit, form, onChangeOrg, onChangeDepartment, orgId}) => {
    const {getFieldDecorator} = form;
    return (
        <Form layout='inline' onSubmit={handleSubmit}>
            <FormItem>
                <div style={{width: '200px'}}>
                    {getFieldDecorator('orgId')(
                        <OrgTreeSelect showSearch size="large" allowClear placeholder="请选择所属机构" onChange={onChangeOrg}/>
                    )}
                </div>
            </FormItem>
            <FormItem>
                <div style={{width: '200px'}}>
                    {getFieldDecorator('departmentId')(
                        <DepartmentSelect orgId={orgId} size="large" allowClear placeholder="请选择所属部门" onChange={onChangeDepartment}/>
                    )}
                </div>
            </FormItem>
            <FormItem>
                {getFieldDecorator('name')(
                    <Input placeholder="名称"/>
                )}
            </FormItem>
            <FormItem>
                <Button type="primary" icon="search" htmlType="submit" size="default">搜索</Button>
            </FormItem>
            {
                saveRight &&
                <FormItem>
                    <ButtonSave title="新增职位">
                        <PositionSaveForm/>
                    </ButtonSave>
                </FormItem>
            }
        </Form>
    );
};

const mapStateToProps = (state) => {
    const {params} = state.uumsPosition;
    return {
        orgId: params && params.orgId
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    orgId: values.orgId,
                    name: values.name,
                    number: 0,
                    size: 20,
                };
                dispatch(findPositionForPage(params));
            }
        });
    };

    const onChangeOrg = (value) => {
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    orgId: value,
                    departmentId: '',
                    name: values.name,
                    number: 0,
                    size: 20,
                };
                dispatch(findPositionForPage(params));
            }
        });
    };

    const onChangeDepartment = (value) => {
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    orgId: values.orgId,
                    departmentId: value,
                    name: values.name,
                    number: 0,
                    size: 20,
                };
                dispatch(findPositionForPage(params));
            }
        });
    };

    return {
        handleSubmit: handleSubmit,
        onChangeOrg: onChangeOrg,
        onChangeDepartment: onChangeDepartment
    }
};

SearchForm.propTypes = {
    form: PropTypes.object,
};

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(SearchForm));
