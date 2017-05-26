import { assert } from 'chai/chai'
import 'steal-mocha'
import { ViewModel } from './index'

describe('can-search-select', function () {
  const vm = new ViewModel({
    items: [{name: 'test'}],
    selectedItem: {name: 'test'}
  })
  it('should set itemsFiltered', function () {
    assert.equal(vm.itemsFiltered.length, 1)
  })
  it('should set val if selectedItem is defined', function () {
    assert.deepEqual(vm.val, {name: 'test'})
  })
})
