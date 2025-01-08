import request from '@/utils/request'

//根据条件分页查询
export const findAdminPageAPI = (pageNum,pageSize,params) => {
    return request({
        url: `/admin/search/${pageNum}/${pageSize}`,
        method: 'get',
        params
    })
}

//新增
export const addAdminAPI = data => {
    return request({
        url: '/admin/',
        method: 'post',
        data
    })
}

//修改
export const modifyAdminAPI = data => {
    return request({
        url: '/admin/',
        method: 'put',
        data
    })
}

//删除
export const removeAdminAPI = id => {
    return request({
        url: `/admin/${id}`,
        method: 'delete'
    })
}
