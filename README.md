# template-chrome-extension

[![Build][build]][build-badge]

> Template for developing Chrome extensions with Svelte.

This project provides a boilerplate for developing Chrome extensions using [Svelte 3](https://svelte.dev).

## Available Scripts

### `yarn develop`

Runs the app in development mode with livereload enabled. Visit `http://localhost:1234` to view the app.

### `yarn build`

Builds the app in production mode.

## Configuration

### Development

To change the destination folder or port (in development), edit the `outDir` and `port` values in [package.json](package.json).

```json
"extension": {
  "outDir": "dist",
  "port": 1234
}
```

### Template

Edit the popup template in [src/popup/index.html](src/popup/index.html).

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/template-chrome-extension.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/template-chrome-extension
