/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../../resource';
import {actions as resourceStructureActions} from '../resourceStructure';
import {actions as unitInfoActions} from '../unitInfo';
import {UnifyType} from '../constants';
import * as actions from './actions';
import {FIND_BY_ID_FOR_UNIFY_CONTROLLER, UPDATE_FOR_UNIFY_CONTROLLER} from './actionTypes';
import {log} from '../../../resource';
const {findById, update, relativePath} = api.controllerResource;

function findControllerById(id) {
    const promise = findById({id: id});
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function updateController(controller) {
    const promise = update(controller);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchController(data) {
    const {id} = data;
    try {
        yield put(actions.findByIdForUnifyControllerFetch());
        const result = yield call(findControllerById, id);
        yield put(actions.findByIdForUnifyControllerSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.CONTROLLER, '请求资源【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.findByIdForUnifyControllerError(e));
    }
}

function* fetchUpdate(data) {
    const {controller} = data;
    const startTime = new Date().getTime();
    try {
        yield put(actions.updateForUnifyControllerFetch());
        const result = yield call(updateController, controller);
        yield put(actions.updateForUnifyControllerSuccess(result));
        if (result.success) {
            const desc = '更新请求资源->【ID：'+controller.id+'，名称：'+controller.name+'，标识符：'
                +controller.controllerSn+'，url：'+controller.controllerUrlMapping
                +'，排序号：'+controller.controllerOrder+'，所属系统'+controller.application.id+'，所属菜单'+controller.menu.id+'】';
            log.saveAction(api.controllerResource.relativePath.update, desc, new Date().getTime()-startTime, 200);
            const {name} = result.data;
            yield put(actions.showUpdatePageForUnifyController(false));
            yield put(resourceStructureActions.findResourceStructureInTree({}, false));
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.CONTROLLER, '请求资源【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.updateForUnifyControllerError(e));
    }
}

function* sagas() {
    yield takeLatest(FIND_BY_ID_FOR_UNIFY_CONTROLLER, fetchController);
    yield takeLatest(UPDATE_FOR_UNIFY_CONTROLLER, fetchUpdate);
}

export default sagas;
