import request from './request.js'

export const getPageLists = (page, pageSizes) => {
    return request({
        url: `/home/page/${page}/${pageSizes}`,
        method: 'get',
    })
}