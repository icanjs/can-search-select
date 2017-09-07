import { assert } from 'chai/chai'
import 'steal-mocha'
import { ViewModel } from './can-search-select'
import { ViewModel as ViewModelSimple } from './can-select'

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
describe('can-select', function () {
  let vm
  beforeEach(function () {
    vm = new ViewModelSimple({
      items: [
        {name: 'foo'},
        {name: 'bar'}
      ],
      selectedItem: {name: 'foo'},
      displayPropName: 'name'
    })
  })
  describe('val', function () {
    it('should contain selected item\'s name', function () {
      assert.equal(vm.val, 'foo')
    })
  })
  describe('select(item)', function () {
    it('should set val to the selected item\'s value', function () {
      vm.select(vm.items[1])
      assert.equal(vm.val, 'bar')
    })
    it('should set selectedItem to the selected item', function () {
      vm.select(vm.items[1])
      assert.equal(vm.selectedItem, vm.items[1])
    })
  })
})
