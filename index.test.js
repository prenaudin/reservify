const test = require('ava')
const reservify = require('.')

test('it instantiates a reservify class', t => {
  const r = reservify()
  t.pass()
})

test('it has default values',  t => {
  const r = reservify()
  t.is(r.test('wiki'), true)
  t.is(r.test('apple'), true)
  t.is(r.test('pierre'), false)
})

test('it can add reserved value', t => {
  const r = reservify().add('pierre')
  t.is(r.test('pierre'), true)
})

test('it can remove reserved value', t => {
  const r = reservify().remove('wiki')
  t.is(r.test('wiki'), false)
})