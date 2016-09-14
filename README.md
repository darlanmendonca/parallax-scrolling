# parallax scrolling

A component to make parallax scrolling with css (perspective 3d) and js (z-index)

<!-- See the [demo](http://codepen.io/darlanmendonca/pen/akgXQq) -->

### Install

With bower

```sh
bower install --save parallax-scrolling
```

Or just download the main files ```dist/parallax-scrolling.css, dist/parallax-scrolling.js``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/parallax-scrolling.css">
<script src="path/to/parallax-scrolling.css"></script>
```

### Usage

And then, in your html, you can use the tag:

```html
<div class="parallax">
  <div class="layer background home"></div>
  <div class="layer base"></div>
  <div class="layer background about"></div>
  <div class="layer base"></div>
</div>
```

Classes:

- ```.parallax``` define container to parallax sections
- ```.layer``` each section of page
- ```.base``` foreground layer in perspective, with solid background-color
- ```.background``` background layer in perspective

Class home, and about just be examples of custom classes that you need implement in your own style. You just need define the background-image, and optionally, background-position, examples:

```sass
// custom css
.background.home {
  background-image: url('path/to/img');
}

.background.about {
  background-image: url('path/to/img');
  background-position: center right;
}
```

By default, .layer.background have ```background-size: auto 100%```, by convenience.

