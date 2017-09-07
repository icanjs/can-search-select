import Component from 'can-component'
import DefineMap from 'can-define/map/'
import './styles.less'
import view from './template.stache'

export const ViewModel = DefineMap.extend({
  // Params and options:
  filterPropName: 'string',
  format (item) {
    return (this.filterPropName && item[this.filterPropName]) || item
  },
  formatInput (item) {
    return this.format(item)
  },
  placeholderSearch: {
    value: 'Enter to Search...'
  },
  placeholderSelect: {
    value: 'Choose From the List'
  },
  btnClass: {
    value: 'caret'
  },

  // Main props:
  selectedItem: {
    type: '*'
  },
  items: {
    type: '*'
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
  searchString: {
    type: 'string'
  },
  itemsFiltered: {
    get () {
      return this.searchString
        ? this.items && this.items.filter(makeFilter(this.searchString, this.filterPropName))
        : this.items
    }
  },
  placeholder: {
    get (val) {
      return val || this.placeholderSearch
    }
  },
  open () {
    if (!this.searchString && this.isOpened) {
      this.isOpened = false
      this.placeholder = this.placeholderSearch
      return
    }
    this.val = ''
    this.searchString = ''
    this.isOpened = true
    this.placeholder = this.placeholderSelect
  },
  onKeyUp (val) {
    this.val = val
    this.searchString = val
    this.isOpened = true
  },
  onFocus () {
    this.placeholder = this.placeholderSearch
  },
  onEnter () {
    if (this.itemsFiltered.length) {
      this.select(this.itemsFiltered[0])
    }
  },
  select (item) {
    this.selectedItem = item
    this.val = this.formatInput(item)
    this.isOpened = false
  }
})

function makeFilter (needle, propName) {
  return function (item) {
    // console.log(`- filter: ${needle}, ${propName} => ${item[propName]}`, item)
    const stack = propName ? item[propName] : item
    return stack.toLowerCase().search(needle.toLowerCase()) !== -1
  }
}

export default Component.extend({
  tag: 'can-search-select',
  ViewModel,
  view
})
