import api from '../Api'

export  default  {
    add: (data) => api("/v1/dic/", data, 'post'),
    update: (data) => api("/v1/dic/", data, 'patch'),
    delete: (ids) => api("/v1/dic/", {}, 'delete'),
    get: (id) => api(`/v1/dic/${id}`),
    all: (data) => api("/v1/dic/all"),
    list: (data) => api("/v1/dic/page", data),
};