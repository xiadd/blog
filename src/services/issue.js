import request from './request'

export function listIssues (query) {
  return request({
    url: '/repos/xiadd/blog/issues',
    params: query
  })
}

export function getIssue (id) {
  return request({
    url: `/repos/xiadd/blog/issues/${id}`
  })
}

export function listLabels () {
  return request({
    url: '/repos/xiadd/blog/labels'
  })
}