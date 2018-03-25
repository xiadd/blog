import axios from 'axios'
import parser from 'libs/githubpage'

const TOKEN = '8#2f68c8ae5e2d70b997ea75d2ebf5f77e0f5739f'.split('#').join('')
const BASE_URL = 'https://api.github.com'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: TOKEN
  }
})

instance.interceptors.response.use(function (response) {
  if (response.headers['link']) {
    response.pagination = parser(response.headers['link'])
  }
  return response
})

export default instance.request