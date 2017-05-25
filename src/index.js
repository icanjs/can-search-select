import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './styles.less';
import view from './template.stache';

const placeholderSearch = 'Enter Company Name';
const placeholderSelect = 'Choose From the List';

export const ViewModel = DefineMap.extend({
  // Options:
  placeholder: {
    value: placeholderSearch
  },
  filterPropName: {
    type: 'string',
    value: 'companyName'
  },
  format (item) {
    return item[this.filterPropName];
  },

  // Props:
  selectedItem: {
    type: '*'
  },
  items: {
    type: '*'
  },

  // Internals:
  val: {
    type: 'string'
  },
  isOpened: 'boolean',
  filter: {
    type: 'string'
  },
  itemsFiltered: {
    get () {
      return this.filter
        ? this.items && this.items.filter(makeFilter(this.filter, this.filterPropName))
        : this.items;
    }
  },
  open () {
    if (!this.filter && this.isOpened) {
      this.isOpened = false;
      this.placeholder = placeholderSearch;
      return;
    }
    this.val = '';
    this.filter = '';
    this.isOpened = true;
    this.placeholder = placeholderSelect;
  },
  onKeyUp (val) {
    this.val = val;
    this.filter = val;
    this.isOpened = true;
  },
  onFocus () {
    this.placeholder = placeholderSearch;
  },
  onEnter () {
    if (this.itemsFiltered.length){
      this.select(this.itemsFiltered[0])
    }
  },
  select (item) {
    this.selectedItem = item;
    this.val = this.format(item);
    this.isOpened = false;
  }
});

function makeFilter (needle, propName) {
  return function (item) {
    console.log(`- filter: ${needle}, ${propName} => ${item[propName]}`, item);
    return item[propName].toLowerCase().search(needle.toLowerCase()) !== -1;
  }
}

export default Component.extend({
  tag: 'can-search-select',
  ViewModel,
  view
});
