import Component from 'can-component'
import DefineMap from 'can-define/map/'
import './styles.less'
import view from './can-select.stache'

export const ViewModel = DefineMap.extend({
  // Main props:
  items: {
    type: '*'
  },
  selectedItem: {
    type: '*'
  },

  // Params and options:
  displayPropName: {
    value: 'string'
  },
  placeholder: {
    value: 'Choose From the List'
  },
  btnClass: {
    value: 'caret'
  },
  format (item) {
    return this.displayPropName && typeof item[this.displayPropName] !== 'undefined' ? item[this.displayPropName] : item
  },
  formatInput (item) {
    return this.format(item)
  },

  // Internals:
  val: {
    type: 'string',
    get (val) {
      if (!val && this.selectedItem) {
        return this.formatInput(this.selectedItem)
      }
      return val
    }
  },
  isOpened: 'boolean',
  open () {
    if (this.isOpened) {
      this.isOpened = false
      return
    }
    this.isOpened = true
  },
  select (item) {
    this.selectedItem = item
    this.val = this.formatInput(item)
    this.isOpened = false
  }
})

export default Component.extend({
  tag: 'can-select',
  ViewModel,
  view
})
