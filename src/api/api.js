import request from './request.js'

export const getPageLists = (page, pageSizes) => {
    return request({
        url: `/api/home/page/${page}/${pageSizes}`,
        method: 'get',
    })
}

export const getDetails = (obj) => request.get('/api/details', { params: obj });