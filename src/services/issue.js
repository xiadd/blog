import request from './request'

export function listIssues (query) {
  return request({
    url: '/repos/xiadd/blog/issues',
    params: query
  })
}