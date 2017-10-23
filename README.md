reservify
==========

> Manage a list of reserved words
> Mostly used to blacklist reserved subdomains (à la Slack, e.g. http://apple.acme.com or http://wiki.acme.com) 


Install
-------

```bash
npm install reservify --save
```


Usage examples
--------------

##### Example

```js
var reservify = require('reservify')();

// Modifiy reserved words or companies.
reservify
  .add('slite')       // Add a reserved word
  .remove('weather')  // Remove a reserved word

console.log(reservify.test('wiki'));  // true
console.log(reservify.test('apple'));  // true
console.log(reservify.test('saucette'));  // false
```

## License

[MIT](https://github.com/prenaudin/reservify/blob/master/LICENSE) 
