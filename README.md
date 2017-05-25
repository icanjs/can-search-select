# can-search-select

[![Build Status](https://travis-ci.org/icanjs/can-search-select.png?branch=master)](https://travis-ci.org/icanjs/can-search-select)

CanJS component for a dropdown select with a search

![Demo](./demo.png)

To try out the demo open `demo.html` file in browser.

## Usage

Your page template can look like this:
```html
<can-import from="can-search-select" />
<can-search-select {items}="items" {format}="@format" {^selected-item}="selectedItem" />
```

Your view model can look like this:
```js
const vm = new DefineMap({
  selectedItem: null,
  items: [{
    companyName: 'Alphabet',
    issuanceName: 'Preferred Series A',
    price: '1,494'
  }],
  format (item) {
    return item.companyName + ', ' + item.issuanceName + ', price: ' + item.price;
  }
})
```

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import 'can-search-select';
```

### CommonJS use

Use `require` to load `can-search-select` and everything else
needed to create a template that uses `can-search-select`:

```js
require("can-search-select");
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-search-select/dist/global/can-search-select.js'></script>
```
