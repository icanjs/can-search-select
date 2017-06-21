/*can-search-select@0.2.4#index*/
define([
    'exports',
    'can-component',
    'can-define/map',
    './template.stache',
    'css!./styles.less.css'
], function (exports, _canComponent, _map, _template) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _map2 = _interopRequireDefault(_map);
    var _template2 = _interopRequireDefault(_template);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var ViewModel = exports.ViewModel = _map2.default.extend({
        filterPropName: 'string',
        format: function format(item) {
            return this.filterPropName && item[this.filterPropName] || item;
        },
        formatInput: function formatInput(item) {
            return this.format(item);
        },
        placeholderSearch: { value: 'Enter to Search...' },
        placeholderSelect: { value: 'Choose From the List' },
        btnClass: { value: 'caret' },
        selectedItem: { type: '*' },
        items: { type: '*' },
        val: {
            type: 'string',
            get: function get(val) {
                if (!val && this.selectedItem) {
                    return this.formatInput(this.selectedItem);
                }
                return val;
            }
        },
        isOpened: 'boolean',
        searchString: { type: 'string' },
        itemsFiltered: {
            get: function get() {
                return this.searchString ? this.items && this.items.filter(makeFilter(this.searchString, this.filterPropName)) : this.items;
            }
        },
        placeholder: {
            get: function get(val) {
                return val || this.placeholderSearch;
            }
        },
        open: function open() {
            if (!this.searchString && this.isOpened) {
                this.isOpened = false;
                this.placeholder = this.placeholderSearch;
                return;
            }
            this.val = '';
            this.searchString = '';
            this.isOpened = true;
            this.placeholder = this.placeholderSelect;
        },
        onKeyUp: function onKeyUp(val) {
            this.val = val;
            this.searchString = val;
            this.isOpened = true;
        },
        onFocus: function onFocus() {
            this.placeholder = this.placeholderSearch;
        },
        onEnter: function onEnter() {
            if (this.itemsFiltered.length) {
                this.select(this.itemsFiltered[0]);
            }
        },
        select: function select(item) {
            this.selectedItem = item;
            this.val = this.formatInput(item);
            this.isOpened = false;
        }
    });
    function makeFilter(needle, propName) {
        return function (item) {
            var stack = propName ? item[propName] : item;
            return stack.toLowerCase().search(needle.toLowerCase()) !== -1;
        };
    }
    exports.default = _canComponent2.default.extend({
        tag: 'can-search-select',
        ViewModel: ViewModel,
        view: _template2.default
    });
});