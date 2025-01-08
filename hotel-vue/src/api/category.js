import request from '@/utils/request'

//根据条件分页查询
export const findCategoryPageAPI = (pageNum,pageSize,params) => {
    return request({
        url: `/category/search/${pageNum}/${pageSize}`,
        method: 'get',
        params
    })
}

//根据条件查询
export const findCategoryAPI = (params) => {
    return request({
        url: '/category/search',
        method: 'get',
        params
    })
}

//查询全部
export const findAllCategoryAPI = () => {
    return request({
        url: '/category/',
        method: 'get'
    })
}

//id查询
export const findCategoryByIdAPI = (id) => {
    return request({
        url: '/category/'+id,
        method: 'get'
    })
}

//新增
export const addCategoryAPI = data => {
    return request({
        url: '/category/',
        method: 'post',
        data
    })
}

//修改
export const modifyCategoryAPI = data => {
    return request({
        url: '/category/',
        method: 'put',
        data
    })
}

//删除
export const removeCategoryAPI = id => {
    return request({
        url: `/category/${id}`,
        method: 'delete'
    })
}
