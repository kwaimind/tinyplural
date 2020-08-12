# ✍ makeSuffix

**VERY MUCH A WORK IN PROGRESS**

makeSuffix is an easy to use utility function that helps convert your strings into their relevant plurals dynamically.

```
import makeSuffix from 'makeSuffix'

makeSuffix('hero', 2)
//=> "2 heroes"
```

It's fully written in TypeScript, with a test-suite to go with it.

We hope you'll get involved! Read our [Contributors' Guide](./CONTRIBUTING.md) for details.

### Info

Say you need to present a promocode that ends in 0,1,2,... days. Using makeSuffix, you can just give the singular noun and the value and it will return the correct plural version.

| Noun  | Plural |
| ----- | ------ |
| day   | days   |
| hero  | heroes |
| goose | geese  |
| fish  | fish   |
