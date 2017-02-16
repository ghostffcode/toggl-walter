# toggl-walter

## Installation

To install from source, clone this repo and install dependencies.

with yarn:

```bash
$ yarn
```

Or npm:
```bash
$ npm install
```
## Usage
The output is built with a umd library target, you can use in browser:
```html
<script src="link/to/bundle.js" charset="utf-8"></script>
<script type="text/javascript">
  // WalterCalculator class is available here
  var money = 30;
  new WalterCalculator(money);
</script>
```
 or node:
 ```javascript
const calc = require('./build/bundle.js');
const money = 30;
new calc(money);
 ```
### Concept
The `WalterCalculator` method can accept a callback function as a second argument, like so:
```javascript
//...
new WalterCalculator(money, function (data) {
  // you have array of iterations
});
```
The array returned contains objects which include details (cycle, walter and leftOver) of each iteration, example data:
```javascript
{
  cycle: 1,
  walter: 26,
  leftOver: 2.3
}
```

## Build
Build using webpack:
```bash
# with yarn
$ yarn run build

# with npm
$ npm run build
```

## Test
To run sample test case:
```bash
# with npm
$ npm run test

# with yarn
$ yarn run test
```
