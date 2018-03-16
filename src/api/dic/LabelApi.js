import api from '../Api'

export  default  {
    add: (data) => api("/v1/label/", data, 'post'),
    update: (data) => api("/v1/label/", data, 'patch'),
    delete: (ids) => api("/v1/label/", {}, 'delete'),
    get: (id) => api(`/v1/label/${id}`),
    all: (data) => api("/v1/label/all"),
    list: (data) => api("/v1/label/page", data),
};