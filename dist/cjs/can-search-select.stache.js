/*can-search-select@0.2.5#can-search-select.stache!steal-stache@3.1.1#steal-stache*/
var stache = require('can-stache');
var mustacheCore = require('can-stache/src/mustache_core');
require('can-view-import@3.1.0#can-view-import');
require('can-stache-bindings@3.7.0#can-stache-bindings');
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
        'args': [':lp::d:focus:rp:']
    },
    {
        'tokenType': 'attrValue',
        'args': ['onFocus()']
    },
    {
        'tokenType': 'attrEnd',
        'args': [':lp::d:focus:rp:']
    },
    {
        'tokenType': 'attrStart',
        'args': [':lp::d:keyup:rp:']
    },
    {
        'tokenType': 'attrValue',
        'args': ['onKeyUp(%element.value)']
    },
    {
        'tokenType': 'attrEnd',
        'args': [':lp::d:keyup:rp:']
    },
    {
        'tokenType': 'attrStart',
        'args': [':lp::d:enter:rp:']
    },
    {
        'tokenType': 'attrValue',
        'args': ['onEnter(%element.value)']
    },
    {
        'tokenType': 'attrEnd',
        'args': [':lp::d:enter:rp:']
    },
    {
        'tokenType': 'attrStart',
        'args': [':lb::d:value:rb:']
    },
    {
        'tokenType': 'attrValue',
        'args': ['val']
    },
    {
        'tokenType': 'attrEnd',
        'args': [':lb::d:value:rb:']
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
        'args': [':lp::d:click:rp:']
    },
    {
        'tokenType': 'attrValue',
        'args': ['open()']
    },
    {
        'tokenType': 'attrEnd',
        'args': [':lp::d:click:rp:']
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
        'tokenType': 'chars',
        'args': ['\n\n']
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
        'tokenType': 'chars',
        'args': ['\n    ']
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
        'args': [':lp::d:click:rp:']
    },
    {
        'tokenType': 'attrValue',
        'args': ['select(item)']
    },
    {
        'tokenType': 'attrEnd',
        'args': [':lp::d:click:rp:']
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
        'args': ['{format(item)']
    },
    {
        'tokenType': 'close',
        'args': ['li']
    },
    {
        'tokenType': 'chars',
        'args': ['\n    ']
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
        'tokenType': 'chars',
        'args': ['\n    ']
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
        'tokenType': 'chars',
        'args': ['\n']
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
module.exports = function (scope, options, nodeList) {
    var moduleOptions = { module: module };
    if (!(options instanceof mustacheCore.Options)) {
        options = new mustacheCore.Options(options || {});
    }
    return renderer(scope, options.add(moduleOptions), nodeList);
};