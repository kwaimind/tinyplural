# ✍ makeSuffix

> A tiny pluralizer for English nouns

makeSuffix is an easy to use utility function that converts your strings into their relevant plurals dynamically. Comes with 0 dependencies.

[Demo](https://codesandbox.io/s/makesuffix-demo-xkgd1?file=/src/App.js)

```javascript
import makeSuffix from 'makesuffix';

const formattedDate = makeSuffix('day', 2);

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
npm install makesuffix --save
# or with yarn
yarn add makesuffix
```

Want to get involved! Read our [Contributors' Guide](./CONTRIBUTING.md) for details.

Found a bug or a rule that doesn't work? Open a [bug report ticket](https://github.com/kwaimind/makeSuffix/issues/new/choose).

Got a feature to add? Fork the repo, add your changes, and make a pull request.

### Info

Say you need to present a promocode that ends in a number of days. Using makeSuffix, you can just give the singular noun and the value and it will return the correct plural version.

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
