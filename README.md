# power-assert-as-tool-demo

It is a demo for babel + power-assert preset.

-  A combination of [babel-register](https://www.npmjs.com/package/babel-register "babel-register") and [babel-preset-power-assert](https://github.com/power-assert-js/babel-preset-power-assert "babel-preset-power-assert").

## Babel configuration

```json
{
  "presets": [
    "es2015"
  ],
  "env": {
    "development": {
      "presets": [
        "jsdoc-to-assert",
        "power-assert"
      ]
    },
    "production": {
      "plugins": [
        "babel-plugin-unassert"
      ]
    }
  }
}
```

- es2015 - [ES2015 preset · Babel](https://babeljs.io/docs/plugins/preset-es2015/ "ES2015 preset · Babel")
- jsdoc-to-assert 
    - JSDoct to runtime assertion
    - [azu/babel-preset-jsdoc-to-assert: Babel plugin for jsdoc-to-assert](https://github.com/azu/babel-preset-jsdoc-to-assert "azu/babel-preset-jsdoc-to-assert: Babel plugin for jsdoc-to-assert")
- power-assert
    - [power-assert](https://github.com/power-assert-js/power-assert "power-assert") preset
- babel-plugin-unassert
    - [unassert](https://github.com/twada/unassert "unassert") remove `asssert` from production code

## Installation

    npm install

## Usage

    # Edit test and fail
    npm test
    # Build with unassert
    npm build

![image](http://efcl.info/wp-content/uploads/2016/04/14-1460633294.png)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
