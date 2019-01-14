# preact-solids
### CSS-only Material Design primitives for Preact

[![npm](https://img.shields.io/npm/v/preact-solids.svg)](https://npmjs.com/package/preact-solids)
[![license](https://img.shields.io/npm/l/preact-solids.svg)](https://creativecommons.org/licenses/by/4.0/)
![installs](https://img.shields.io/npm/dt/preact-solids.svg)
![mind BLOWN](https://img.shields.io/badge/mind-BLOWN-ff69b4.svg)

<sup><sub><sup><sub>.</sub></sup></sub></sup>

![logo](solids.png)

## Install

```sh
npm install --save solids preact-solids
```

## Use
Inside your Preact components, import the `preact-solids` component you want to use and use it in the JSX. Assuming you are not using CSS Modules, you also import the styles from `solids` that correspond with the components you are using. Don't forget to import `solids/solids` and render the `solids` context element:

```js
import { h } from 'preact'
import AppBar from 'preact-solids/appbar'
import 'solids/solids'
import 'solids/appbar'

export const MyComponent = (props) => (
  <div class="solids">
    <AppBar prominent fixed shrink>
      <p>AppBar</p>
    </AppBar>
  </div>
)
```

If you are using CSS Modules, you should make sure that you import all your solids components in one place and use that import as a theme provider:

*routes/home/index.js*
```js
import { h } from 'preact';
import { Provider } from 'preact-solids/theme';
import AppBar from 'preact-solids/appbar';
import classes from './style';

export const Home = () => (
	<Provider value={{ classes }}>
		<AppBar>
			<p>Solids</p>
		</AppBar>
	</Provider>
);

export default Home;
```

*routes/home/styles.scss*
```scss
@import "solids/solids";
@import 'solids/appbar';

/* other styles */
```

Preact solids components load the default class names from solids, but listen for alternatives using a Theme consumer. If such alternatives are supplied to the components using a Theme provider like in the example above, it will use those class names instead of the defaults.


## solids-www

For now, have a look at the [solids-www](https://github.com/download/solids-www) project for some examples on how to use `solids` and `preact-solids` components in an app generated with [Preact CLI](https://github.com/developit/preact-cli).


## Issues

Add an issue in the [issue tracker](https://github.com/download/preact-solids/issues)
to let me know of any problems you find, or questions you may have.

## Credits

Credits go to:
* The Material Design and MDC teams at Google
* [Ben Mildren](https://github.com/mildrenben) for inspiring the world with [Surface](https://mildrenben.github.io/surface/).
* [Jason Miller](https://github.com/developit) for building [Preact](https://preactjs.com)
* [Prateek Bhatnagar](https://github.com/prateekbh) for building [preact-material-components](https://github.com/prateekbh/preact-material-components)


## Copyright
© 2019 by [Stijn de Witt](http://StijnDeWitt.com). Some rights reserved.

## License
[MIT](https://opensource.org/licenses/MIT)
