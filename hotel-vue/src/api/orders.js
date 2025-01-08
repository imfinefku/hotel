import request from '@/utils/request'

//根据条件分页查询
export const findOrdersPageAPI = (pageNum,pageSize,params) => {
    return request({
        url: `/orders/search/${pageNum}/${pageSize}`,
        method: 'get',
        params
    })
}

//根据条件查询
export const findOrdersAPI = (params) => {
    return request({
        url: '/orders/search',
        method: 'get',
        params
    })
}

//查询全部
export const findAllOrdersAPI = () => {
    return request({
        url: '/orders/',
        method: 'get'
    })
}

// 后台-新增入住订单
export const addOrdersAPI = data => {
    return request({
        url: '/orders/',
        method: 'post',
        data
    })
}

//修改
export const modifyOrdersAPI = data => {
    return request({
        url: '/orders/',
        method: 'put',
        data
    })
}

//删除
export const removeOrdersAPI = id => {
    return request({
        url: `/orders/${id}`,
        method: 'delete'
    })
}

//确认入住
export const confirmAPI = id => {
    return request({
        url: `/orders/confirm/${id}`,
        method: 'get'
    })
}

//退房
export const checkOutAPI = params => {
    return request({
        url: `/orders/checkOut`,
        method: 'get',
        params
    })
}

