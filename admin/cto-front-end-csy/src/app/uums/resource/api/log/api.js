/**
 * Created by feichongzheng on 17/9/28.
 */
import {request} from '../../../../resource';
import apiPath from './apiPath';

const findForPage = (data) => request.post(apiPath.findForPage, data);
const saveAction = (data) => request.post(apiPath.saveAction, data);
const saveInterface = (data) => request.post(apiPath.saveInterface, data);

export {findForPage, saveAction, saveInterface};



