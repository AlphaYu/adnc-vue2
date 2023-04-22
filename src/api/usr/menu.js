import request from '@/utils/request'

export function getList() {
  return request({
    url: '/usr/api/menus',
    method: 'get'
  })
}

export function listForRouter(params) {
  return request({
    url: '/usr/api/menus/routers',
    method: 'get',
    params
  })
}

export function save(data) {
  let methodName = 'post'
  let url = '/usr/api/menus'
  if (data.id > 0) {
    methodName = 'put'
    url = url + '/' + data.id
  }
  return request({
    url: url,
    method: methodName,
    data
  })
}

export function delMenu(id) {
  return request({
    url: `/usr/api/menus/${id}`,
    method: 'delete'
  })
}
export function menuTreeListByRoleId(roleId) {
  return request({
    url: `/usr/api/menus/${roleId}/menuTree`,
    method: 'get'
  })
}
