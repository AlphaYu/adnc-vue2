import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/maint/api/loginlogs',
    method: 'get',
    params
  })
}