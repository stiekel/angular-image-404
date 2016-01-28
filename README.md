[![Bower version](https://badge.fury.io/bo/angular-image-404.svg)](http://bower.io/search/?q=angular%20image%20404) [![__npm version](https://badge.fury.io/js/angular-image-404.svg)](https://www.npmjs.com/package/angular-image-404)

# angular-image-404
AngualrJS directive that shows a fallback image when img element can not show picture correct.

# Install

You can install this directive with npm:

```sh
npm install --save angular-image-404
```

Install with Bower:

```sh
bower install --save --allow-root angular-image-404
```

or just [download](https://github.com/stiekel/angular-image-404/archive/master.zip) it.

# Usage

After install, you need to include the `dist/angular-image-404.js` in html like this:

```html
<script type="text/javascript" src="./angular-image-404/dist/angular-image-404.js"></script>
```

And add directive module in dependience list:

```js
var app = angular.module('app', ['angular-image-404']);
```

Now you can use it in html like this:

```html
<img src="./notFound.jpg" image-404="./fallback.jpg" width=200 height=120>
```

And you can set the attribute `image-404` as empty:

```html
<img src="./notFound.jpg" image-404 width=200 height=120>
```

if `image-404` set as empty, directive will get placeholder image from [http://dummyimage.com](http://dummyimage.com), and you can set the fallback image with the following attribute:

*   `fb-bgcolor`: background color
*   `fb-color`: color of the text on the image
*   `fb-text`: text on the image

like this:

```html
<img src="./notFound.jpg" image-404 fb-bgcolor="#C0392B" fb-color="#C5EFF7" fb-text="Not Found" width=200 height=120>
```


# Test & Release

If you want to run example, you should run npm i:

```sh
npm i
```

and run gulp with `test` task:

```sh
gulp test
```

BTW, `gulp release` will create release js file in `./dist` folder.
