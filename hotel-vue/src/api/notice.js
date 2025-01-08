import request from '@/utils/request'

//根据条件分页查询
export const findNoticePageAPI = (pageNum,pageSize,params) => {
    return request({
        url: `/notice/search/${pageNum}/${pageSize}`,
        method: 'get',
        params
    })
}

//查询最新五条公告
export const getTop5NoticeAPI = () => {
    return request({
        url: '/notice/getTop5',
        method: 'get'
    })
}

//id查询
export const getNoticeByIdAPI = (id) => {
    return request({
        url: '/notice/'+id,
        method: 'get'
    })
}

//新增
export const addNoticeAPI = data => {
    return request({
        url: '/notice/',
        method: 'post',
        data
    })
}

//修改
export const modifyNoticeAPI = data => {
    return request({
        url: '/notice/',
        method: 'put',
        data
    })
}

//删除
export const removeNoticeAPI = id => {
    return request({
        url: `/notice/${id}`,
        method: 'delete'
    })
}
