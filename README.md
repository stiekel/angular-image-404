# angular-image-404
AngualrJS directive that shows a fallback image when img element can not show picture correct.

# Install

You can install this directive with npm:

```sh
npm install --save angular-image-404
```

or just [download](https://github.com/stiekel/angular-image-404/archive/master.zip) it.

# Usage

After install, you need to include the `dist/angular-image-404.js` in html like this:

```html
<script type="text/javascript" src="./angular-image-404/dist/angular-image-404.js"></script>
```

and add directive module in dependience list:

```js
var app = angular.module('app', ['angular-image-404']);
```

now you can use it in html like this:

```html
<img src="./notFound.jpg" image-404="./fallback.jpg" width=200 height=120>
```

and you can set the attribute `image-404` as empty:

```html
<img src="./notFound.jpg" image-404 width=200 height=120>
```

if `image-404` set as empty, directive will get placeholder image from [http://dummyimage.com](http://dummyimage.com).