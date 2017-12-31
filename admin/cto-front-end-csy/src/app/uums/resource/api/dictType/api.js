/**
 * Created by feichongzheng on 17/9/28.
 */
import {request} from '../../../../resource';
import apiPath from './apiPath';

const findForPage = (data) => request.post(apiPath.findForPage, data);
const save = (data) => request.post(apiPath.save, data);
const update = (data) => request.post(apiPath.update, data);
const remove = (data) => request.post(apiPath.remove, data);
const findForSelect = (data) => request.post(apiPath.findForSelect, data);
const updAvailable = (data) => request.post(apiPath.updAvailable, data);

export {findForPage, save, update, remove, updAvailable, findForSelect};



