import { assert } from 'chai/chai'
import 'steal-mocha'
import { ViewModel } from './<%= name %>'

describe('<%= module %>', function () {
  it('should have message', function () {
    var vm = new ViewModel();
    assert.equal(vm.message, 'This is the <%= tag %> component');
  })
})
