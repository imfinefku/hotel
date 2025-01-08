import request from '@/utils/request'

//根据条件分页查询
export const findMemberPageAPI = (pageNum,pageSize,params) => {
    return request({
        url: `/member/search/${pageNum}/${pageSize}`,
        method: 'get',
        params
    })
}

//根据条件查询
export const findMemberAPI = (params) => {
    return request({
        url: '/member/search',
        method: 'get',
        params
    })
}

//查询全部
export const findAllMemberAPI = () => {
    return request({
        url: '/member/',
        method: 'get'
    })
}

//新增
export const addMemberAPI = data => {
    return request({
        url: '/member/',
        method: 'post',
        data
    })
}

//修改
export const modifyMemberAPI = data => {
    return request({
        url: '/member/',
        method: 'put',
        data
    })
}

//删除
export const removeMemberAPI = id => {
    return request({
        url: `/member/${id}`,
        method: 'delete'
    })
}
