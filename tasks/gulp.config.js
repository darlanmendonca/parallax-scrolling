'use strict';

module.exports = {
  templates: {
    src: './sources/templates/*.jade',
    dest: './public/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './dist/',
    sourcemaps: '/sources/styles',
  },
  scripts: {
    src: [
      './sources/**/*.js',
      '!./sources/**/*.spec.js',
    ],
    dest: './dist/',
  },
  lintScripts: [
    './gulpfile.js',
    './tasks/**/*.js',
    './sources/**/*.js',
  ],
  browserSync: require('browser-sync').create(),
  browserSyncOptions: {
    server: {
      baseDir: [
        './public',
        './dist',
      ],
    },
    notify: false,
    middleware: [require('connect-history-api-fallback')()],
    reloadDelay: 100,
    open: false,
  },
  imgs: {
    src: './sources/imgs/*',
    dest: './public/imgs',
  },
};
