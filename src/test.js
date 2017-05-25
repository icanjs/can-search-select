import { assert } from 'chai/chai'
import 'steal-mocha'
import { ViewModel } from './index'

describe('can-search-select', function () {
  const vm = new ViewModel({
    items: [{name: 'test'}]
  })
  it('should set itemsFiltered', function () {
    assert.equal(vm.itemsFiltered.length, 1)
  })
})
