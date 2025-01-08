import axios from 'axios'
import { Message } from 'element-ui'
import { getToken,removeToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    //设置token
    config.headers['Authorization'] = getToken()
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom status
   * Here is just an example
   * You can also judge the status by HTTP Status status
   */
  response => {
    const res = response.data

    // if the custom status is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      if (res.code === 20006) {//token失效
        removeToken()
        localStorage.removeItem('vuex')
        setTimeout(() => {
          location.href = "/"
        }, 1000);
      }
      // return Promise.reject(new Error(res.message || 'Error'))
      return Promise.reject(res.message || 'Error')
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service