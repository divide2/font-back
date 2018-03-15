import api from '../Api'

export const DicAddApi = api('');
export const DicListApi = () => api('/v1/dic/page');
export const DicDeleteApi = (id) => api(`/v1/dic/${id}`, {}, 'delete');
export const DicUpdateApi=(value)=>api('/v1/dic',value,'patch')