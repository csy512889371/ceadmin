/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../../resource';
import * as actions from './actions';
import {actions as orgStructureActions} from '../orgStructure';
import {actions as unitInfoActions} from '../unitInfo';
import {UnifyType} from '../constants';
import {FIND_BY_ID_FOR_UNIFY_DEPARTMENT, UPDATE_FOR_UNIFY_DEPARTMENT} from './actionTypes';

import {log} from '../../../resource';

const {findById, update} = api.department;

function findDepartmentById(id) {
    const promise = findById({id: id});
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function updateDepartment(department) {
    const promise = update(department);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchDepartment(data) {
    const {id} = data;
    try {
        yield put(actions.findByIdForUnifyDepartmentFetch());
        const result = yield call(findDepartmentById, id);
        yield put(actions.findByIdForUnifyDepartmentSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.DEPARTMENT, '部门【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.findByIdForUnifyDepartmentError(e));
    }
}

function* fetchUpdate(data) {
    const {department} = data;
    const startTime = new Date().getTime();
    try {
        yield put(actions.updateForUnifyDepartmentFetch());
        const result = yield call(updateDepartment, department);
        yield put(actions.updateForUnifyDepartmentSuccess(result));
        if (result.success) {
            const desc = '更新部门->【ID：'+department.id+'，名称：'+department.name+'，描述：'
                +department.description+'，所属机构：'+department.orgId+'】';
            log.saveAction(api.department.relativePath.update, desc, new Date().getTime()-startTime, 200);
            const {name} = result.data;
            yield put(actions.showUpdatePageForUnifyDepartment(false));
            yield put(orgStructureActions.findOrgStructureInTree({}, false));
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.DEPARTMENT, '部门【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.updateForUnifyDepartmentError(e));
    }
}

function* sagas() {
    yield takeLatest(FIND_BY_ID_FOR_UNIFY_DEPARTMENT, fetchDepartment);
    yield takeLatest(UPDATE_FOR_UNIFY_DEPARTMENT, fetchUpdate);
}

export default sagas;
