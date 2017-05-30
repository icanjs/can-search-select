/*[global-shim-start]*/
(function(exports, global, doEval){ // jshint ignore:line
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var set = function(name, val){
		var parts = name.split("."),
			cur = global,
			i, part, next;
		for(i = 0; i < parts.length - 1; i++) {
			part = parts[i];
			next = cur[part];
			if(!next) {
				next = cur[part] = {};
			}
			cur = next;
		}
		part = parts[parts.length - 1];
		cur[part] = val;
	};
	var useDefault = function(mod){
		if(!mod || !mod.__esModule) return false;
		var esProps = { __esModule: true, "default": true };
		for(var p in mod) {
			if(!esProps[p]) return false;
		}
		return true;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses the exports and module object.
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if(deps[1] === "module") {
				args[1] = module;
			}
		} else if(!args[0] && deps[0] === "module") {
			args[0] = { id: moduleName };
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		result = module && module.exports ? module.exports : result;
		modules[moduleName] = result;

		// Set global exports
		var globalExport = exports[moduleName];
		if(globalExport && !get(globalExport)) {
			if(useDefault(result)) {
				result = result["default"];
			}
			set(globalExport, result);
		}
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	ourDefine("@loader", [], function(){
		// shim for @@global-helpers
		var noop = function(){};
		return {
			get: function(){
				return { prepareGlobal: noop, retrieveGlobal: noop };
			},
			global: global,
			__exec: function(__load){
				doEval(__load.source, global);
			}
		};
	});
}
)({},window,function(__$source__, __$global__) { // jshint ignore:line
	eval("(function() { " + __$source__ + " \n }).call(__$global__);");
}
)
/*can-search-select@0.2.3#template.stache!steal-stache@3.0.7#steal-stache*/
define('can-search-select/template.stache', [
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.0.7#can-view-import',
    'can-stache-bindings@3.1.5#can-stache-bindings'
], function (module, stache, mustacheCore) {
    var renderer = stache([
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['input-group']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n  ']
        },
        {
            'tokenType': 'start',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['type']
        },
        {
            'tokenType': 'attrValue',
            'args': ['text']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['type']
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['form-control']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['placeholder']
        },
        {
            'tokenType': 'special',
            'args': ['placeholder']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['placeholder']
        },
        {
            'tokenType': 'attrStart',
            'args': ['($focus)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['onFocus()']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($focus)']
        },
        {
            'tokenType': 'attrStart',
            'args': ['($keyup)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['onKeyUp(%element.value)']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($keyup)']
        },
        {
            'tokenType': 'attrStart',
            'args': ['($enter)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['onEnter(%element.value)']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($enter)']
        },
        {
            'tokenType': 'attrStart',
            'args': ['{$value}']
        },
        {
            'tokenType': 'attrValue',
            'args': ['val']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['{$value}']
        },
        {
            'tokenType': 'end',
            'args': [
                'input',
                true
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n  ']
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['input-group-btn']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
        },
        {
            'tokenType': 'start',
            'args': [
                'button',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['btn btn-default']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['type']
        },
        {
            'tokenType': 'attrValue',
            'args': ['button']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['type']
        },
        {
            'tokenType': 'attrStart',
            'args': ['($click)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['open()']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($click)']
        },
        {
            'tokenType': 'end',
            'args': [
                'button',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'special',
            'args': ['btnClass']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
        },
        {
            'tokenType': 'close',
            'args': ['button']
        },
        {
            'tokenType': 'chars',
            'args': ['\n  ']
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'special',
            'args': ['#if isOpened']
        },
        {
            'tokenType': 'chars',
            'args': ['\n  ']
        },
        {
            'tokenType': 'start',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['dropdown-list']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'ul',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['#each itemsFiltered as item']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['($click)']
        },
        {
            'tokenType': 'attrValue',
            'args': ['select(item)']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['($click)']
        },
        {
            'tokenType': 'end',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'special',
            'args': ['format(item)']
        },
        {
            'tokenType': 'close',
            'args': ['li']
        },
        {
            'tokenType': 'chars',
            'args': ['    ']
        },
        {
            'tokenType': 'special',
            'args': ['else']
        },
        {
            'tokenType': 'chars',
            'args': ['\n      ']
        },
        {
            'tokenType': 'start',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['No records found']
        },
        {
            'tokenType': 'close',
            'args': ['li']
        },
        {
            'tokenType': 'special',
            'args': ['/each']
        },
        {
            'tokenType': 'chars',
            'args': ['\n  ']
        },
        {
            'tokenType': 'close',
            'args': ['ul']
        },
        {
            'tokenType': 'special',
            'args': ['/if']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'done',
            'args': []
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});
/*can-search-select@0.2.3#index*/
define('can-search-select', [
    'exports',
    'can-component',
    'can-define/map/map',
    'can-search-select/template.stache',
    'can-search-select/styles.less'
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
        placeholderSearch: { value: 'Enter to Search...' },
        placeholderSelect: { value: 'Choose From the List' },
        btnClass: { value: 'caret' },
        selectedItem: { type: '*' },
        items: { type: '*' },
        val: {
            type: 'string',
            get: function get(val) {
                if (!val && this.selectedItem) {
                    return this.format(this.selectedItem);
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
            this.val = this.format(item);
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
/*[global-shim-end]*/
(function(){ // jshint ignore:line
	window._define = window.define;
	window.define = window.define.orig;
}
)();