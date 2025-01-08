import request from '@/utils/request'

//根据条件分页查询
export const findMessagePageAPI = (pageNum,pageSize,params) => {
    return request({
        url: `/message/search/${pageNum}/${pageSize}`,
        method: 'get',
        params
    })
}

//根据条件查询
export const findMessageAPI = (params) => {
    return request({
        url: '/message/search',
        method: 'get',
        params
    })
}

//查询全部
export const findAllMessageAPI = () => {
    return request({
        url: '/message/',
        method: 'get'
    })
}

//新增
export const addMessageAPI = data => {
    return request({
        url: '/message/',
        method: 'post',
        data
    })
}

//修改
export const modifyMessageAPI = data => {
    return request({
        url: '/message/',
        method: 'put',
        data
    })
}

//删除
export const removeMessageAPI = id => {
    return request({
        url: `/message/${id}`,
        method: 'delete'
    })
}
