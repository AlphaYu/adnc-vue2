import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/maint/api/nloglogs',
    method: 'get',
    params
  })
}