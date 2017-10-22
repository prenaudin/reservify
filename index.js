const originalData = require('./data')
const utils = require('./utils')

class Reservify {
  constructor() {
    this.data = utils.clone(originalData)
  }

  add(domains) {
    this.data = this.data.concat(domains)
    return this
  }

  remove(domain) {
    this.data = utils.without(this.data, domain)
    return this
  }

  test(domain) {
    return utils.has(this.data, domain)
  }
}

module.exports = () => new Reservify()