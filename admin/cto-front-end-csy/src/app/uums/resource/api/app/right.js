import storage from '../../storage';
import apiRelativePath from './apiRelativePath';
const saveRight = storage.right(apiRelativePath.save);
const updateRight = storage.right(apiRelativePath.update);
const deleteRight = storage.right(apiRelativePath.remove);

export {saveRight, updateRight, deleteRight};
