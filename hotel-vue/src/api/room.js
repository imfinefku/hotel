import request from '@/utils/request'

//根据条件分页查询
export const findRoomPageAPI = (pageNum,pageSize,params) => {
    return request({
        url: `/room/search/${pageNum}/${pageSize}`,
        method: 'get',
        params
    })
}

//根据条件分页查询预约
export const findRoomListAPI = (params) => {
    return request({
        url: `/room/findRoomList`,
        method: 'get',
        params
    })
}

//根据条件查询
export const findRoomAPI = (params) => {
    return request({
        url: '/room/search',
        method: 'get',
        params
    })
}

//根据id查询
export const findRoomByIdAPI = (id) => {
    return request({
        url: '/room/'+id,
        method: 'get'
    })
}

//查询全部
export const findAllRoomAPI = () => {
    return request({
        url: '/room/',
        method: 'get'
    })
}

//新增
export const addRoomAPI = data => {
    return request({
        url: '/room/',
        method: 'post',
        data
    })
}

//修改
export const modifyRoomAPI = data => {
    return request({
        url: '/room/',
        method: 'put',
        data
    })
}

//删除
export const removeRoomAPI = id => {
    return request({
        url: `/room/${id}`,
        method: 'delete'
    })
}
