# parallax scrolling

A component to make parallax scrolling with css (perspective 3d) and js (z-index)

See the [demo](http://codepen.io/darlanmendonca/full/NRNvRZ/)

This module is built in pure javascript. But we wish make it for another frameworks, check below our to do list:

- [x] [angular](https://github.com/darlanmendonca/angular-parallax-scrolling)
- [ ] react
- [ ] vue
- [ ] ... (open an issue)

### Install

With bower

```sh
bower install --save parallax-scrolling
```

Or just download the main files ```dist/parallax-scrolling.css, dist/parallax-scrolling.js``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/parallax-scrolling.css">
<script src="path/to/parallax-scrolling.js"></script>
```

### Usage

And then, in your html, you can use the tag:

```html
<div class="parallax-scrolling">
  <div class="layer-background home"></div>
  <div class="layer-base"></div>
  <div class="layer-background about"></div>
  <div class="layer-base"></div>
</div>
```

```js
// in your own js
// invoke parallaxScrolling function
parallaxScrolling();
```

Classes:

- ```.parallax-scrolling``` define container to parallax sections
- ```.layer-base``` foreground layer in perspective, with solid background-color
- ```.layer-background``` background layer in perspective

Class .home, and .about just be examples of custom classes that you need implement in your own style. You probaly will need define the background-image, background-position, etc. I.e:

```sass
// custom css
.layer-background.home {
  background-image: url('path/to/img');
}

.layer-background.about {
  background-image: url('path/to/img');
  background-position: center right;
}
```

By default, .layer-background have ```background-size: auto 100%```, by convenience.

