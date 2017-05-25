/*can-search-select@0.0.0#index*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = undefined;
var _canComponent = require('can-component');
var _canComponent2 = _interopRequireDefault(_canComponent);
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
require('./styles.less.css');
var _template = require('./template.stache.js');
var _template2 = _interopRequireDefault(_template);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var placeholderSearch = 'Enter Company Name';
var placeholderSelect = 'Choose From the List';
var ViewModel = exports.ViewModel = _map2.default.extend({
    placeholder: { value: placeholderSearch },
    filterPropName: {
        type: 'string',
        value: 'companyName'
    },
    format: function format(item) {
        return item[this.filterPropName];
    },
    selectedItem: { type: '*' },
    items: { type: '*' },
    val: { type: 'string' },
    isOpened: 'boolean',
    filter: { type: 'string' },
    itemsFiltered: {
        get: function get() {
            return this.filter ? this.items && this.items.filter(makeFilter(this.filter, this.filterPropName)) : this.items;
        }
    },
    open: function open() {
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
    onKeyUp: function onKeyUp(val) {
        this.val = val;
        this.filter = val;
        this.isOpened = true;
    },
    onFocus: function onFocus() {
        this.placeholder = placeholderSearch;
    },
    onEnter: function onEnter() {
        if (this.itemsFiltered.length) {
            this.select(this.itemsFiltered[0]);
        }
    },
    select: function select(item) {
        this.selectedItem = item;
        this.val = this.format(item);
        this.isOpened = false;
    }
});
function makeFilter(needle, propName) {
    return function (item) {
        console.log('- filter: ' + needle + ', ' + propName + ' => ' + item[propName], item);
        return item[propName].toLowerCase().search(needle.toLowerCase()) !== -1;
    };
}
exports.default = _canComponent2.default.extend({
    tag: 'can-search-select',
    ViewModel: ViewModel,
    view: _template2.default
});