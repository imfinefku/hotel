import request from '@/utils/request'

//登录
export const loginAPI = data => {
    return request({
        url: `/system/login`,
        method: 'post',
        data
    })
}

//注册
export const registerAPI = data => {
    return request({
        url: `/system/register`,
        method: 'post',
        data
    })
}

//根据token获取用户信息
export const getUserInfoByTokenAPI = () => {
    return request({
        url: `/system/getUserInfoByToken`,
        method: 'get'
    })
}