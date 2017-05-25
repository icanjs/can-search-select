import { assert } from 'chai/chai'
import 'steal-mocha'
import plugin from './index'

describe('can-search-select', function () {
  it('should initialized the plugin', function () {
    assert.equal(plugin(), 'This is can-search-select')
  })
})
