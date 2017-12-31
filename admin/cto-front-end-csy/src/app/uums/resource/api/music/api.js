import { fetchJSONByGet } from './ajax'

const findForPage = (params) => {
    let api = fetchJSONByGet('http://tingapi.ting.baidu.com/v1/restserver/ting');
    return api(params);
};

export {
    findForPage
};



