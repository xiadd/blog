import request from './request'

/**
 * 获取文章列表
 * @param {*} query 
 */
export function listIssues (query) {
  return request({
    url: '/repos/xiadd/blog/issues',
    params: query
  })
}

/**
 * 获取文章内容
 * @param {} id 
 */
export function getIssue (id) {
  return request({
    url: `/repos/xiadd/blog/issues/${id}`
  })
}

/**
 * 获取文章标签
 */
export function listLabels () {
  return request({
    url: '/repos/xiadd/blog/labels'
  })
}