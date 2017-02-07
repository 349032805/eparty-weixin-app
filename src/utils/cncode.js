const URI = 'https://cnodejs.org/api/v1/topics'
const fetch = require('./fetch')

/**
 * @param  {String} type
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
function fetchApi (type, params) {
  return fetch(URI, type, params)
}

/**
 * 获取列表类型的数据
 * @param  {String} type   类型
 * @param  {Number} page   页码
 * @param  {Number} limit  页条数
 * @return {Promise}       包含抓取任务的Promise
 */
function find (type, page = 1, tab, limit = 20, mdrender = true) {
  const params = {type: type, page: page, tab: tab, limit: limit, mdrender: mdrender}
  return fetchApi(type, params)
    .then(res => res.data)
}

/**
 * 获取单条类型的数据
 * @param  {Number} id      主题ID
 * @return {Promise}       包含抓取任务的Promise
 */
function findOne (id) {
  return fetchApi(id)
    .then(res => res.data)
}

module.exports = { find, findOne }
