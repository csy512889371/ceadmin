/**
 * Created by feichongzheng on 17/9/28.
 */
import {uumsServer} from '../apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    findForPage: uumsServer + apiRelativePath.findForPage,
    save: uumsServer + apiRelativePath.save,
    update: uumsServer + apiRelativePath.update,
    remove: uumsServer + apiRelativePath.remove,
    findForSelect: uumsServer + apiRelativePath.findForSelect,
    updAvailable: uumsServer + apiRelativePath.updAvailable
};

export default apiPath;
