import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/maint/api/opslogs',
    method: 'get',
    params
  })
}

export function getListByUser(params) {
  return request({
    url: '/maint/api/users/opslogs',
    method: 'get',
    params
  })
}
