function clone(arr) {
  return arr.slice(0)
}

function has(arr, item) {
  return arr.indexOf(item) > -1
}

function without(arr, item) {
  return arr.filter(i => i !== item)
}

module.exports = {
  clone,
  has,
  without,
}