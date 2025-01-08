import request from '@/utils/request'

//根据条件分页查询
export const findAppointmentPageAPI = (pageNum,pageSize,params) => {
    return request({
        url: `/appointment/search/${pageNum}/${pageSize}`,
        method: 'get',
        params
    })
}

//根据条件查询
export const findAppointmentAPI = (params) => {
    return request({
        url: '/appointment/search',
        method: 'get',
        params
    })
}

//查询全部
export const findAllAppointmentAPI = () => {
    return request({
        url: '/appointment/',
        method: 'get'
    })
}

//预订
export const addAppointmentAPI = data => {
    return request({
        url: '/appointment/',
        method: 'post',
        data
    })
}

//确认用户预订
export const confirmAppointmentAPI = appointmentId => {
    return request({
        url: '/appointment/confirm',
        method: 'get',
        params: {appointmentId}
    })
}
//取消预订
export const cancelAppointmentAPI = data => {
    return request({
        url: '/appointment/cancel',
        method: 'post',
        data
    })
}

//删除
export const removeAppointmentAPI = id => {
    return request({
        url: `/appointment/${id}`,
        method: 'delete'
    })
}
