/**
 * Created by feichongzheng on 17/9/28.
 */
import {request} from '../../../../resource';
import apiPath from './apiPath';

const find = (data) => request.post(apiPath.auth.find, data);
const findAuthedResource = (data) => request.post(apiPath.auth.findAuthedResource, data);
const changeAuthedResource = (data) => request.post(apiPath.auth.changeAuthedResource, data);

export {find, findAuthedResource, changeAuthedResource};
