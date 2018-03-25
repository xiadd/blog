function parser (linkStr) {
  return linkStr.split(',').map(function (rel) {
    return rel.split(';').map(function (curr, idx) {
      if (idx === 0) return /[^_]page=(\d+)/.exec(curr)[1]
      if (idx === 1) return /rel="(.+)"/.exec(curr)[1]
      return ''
    })
  }).reduce(function (obj, curr, i) {
    obj[curr[1]] = curr[0]
    return obj
  }, {})
}

export default parser
