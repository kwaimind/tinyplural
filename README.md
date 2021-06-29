# ✍ tinyplural

[![bundlephobia](https://img.shields.io/bundlephobia/minzip/tinyplural?style=flat-square)](https://bundlephobia.com/package/tinyplural) ![npm version](https://img.shields.io/npm/v/tinyplural?style=flat-square) [![Run Jest Tests](https://github.com/kwaimind/tinyplural/actions/workflows/main.yml/badge.svg)](https://github.com/kwaimind/tinyplural/actions/workflows/main.yml)

> A tiny pluralizer for English nouns

tinyplural is an easy to use utility function that converts your strings into their relevant plurals dynamically. Comes with 0 dependencies.

[Demo](https://xkgd1.csb.app/)

```javascript
import tinyplural from 'tinyplural';

const formattedDate = tinyplural('day', 2);

return (
  <>
    <p>Next payment due in {formattedDate}</p>
  </>
);

// => Next payment due in 2 days
```

It's fully written in TypeScript, with a test-suite to go with it.

The library is available as an npm package. To install the package run:

```
npm install tinyplural --save
# or with yarn
yarn add tinyplural
```

Want to get involved! Read our [Contributors' Guide](./CONTRIBUTING.md) for details.

Found a bug or a rule that doesn't work? Open a [bug report ticket](https://github.com/kwaimind/tinyplural/issues/new/choose).

Got a feature to add? Fork the repo, add your changes, and make a pull request.

### Info

Say you need to present a promocode that ends in a number of days. Using tinyplural, you can just give the singular noun and the value and it will return the correct plural version.

| Noun  | Plural |
| ----- | ------ |
| day   | days   |
| hero  | heroes |
| goose | geese  |
| fish  | fish   |

### Resources

These are some good guides explaining the rules behind plural nouns in English:

- https://www.ef.com/wwen/english-resources/english-grammar/singular-and-plural-nouns/
- https://www.grammarly.com/blog/plural-nouns/
