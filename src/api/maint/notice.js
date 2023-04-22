import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/maint/api/notices',
    method: 'get',
    params
  })
}
