import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/api/session',
    method: 'post',
    data
  })
}

export function logout(token) {
  return request({
    url: '/auth/api/session',
    method: 'delete'
  })
}

export function updatePwd(params) {
  return request({
    url: '/auth/api/session/password',
    method: 'put',
    data: params
  })
}

export function RenewToken(data) {
  return request({
    url: '/auth/api/session',
    method: 'put',
    data
  })
}

export function getAuthInfo() {
  return request({
    url: '/auth/api/session',
    method: 'get'
  })
}

export function getInfo() {
  return request({
    url: '/usr/api/users/current',
    method: 'get'
  })
}

