# How to contribute

I'm really glad you're reading this, because we need volunteer developers to help this project come to fruition.

## Testing

We have a handful of Jest tests which try and reflect how this package is to be used in the wild, as well as test that this actually works as expected.

## Submitting changes

Please send a [GitHub Pull Request to opengovernment](https://github.com/kwaimind/makeSuffix/pull/new/production) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). When you send a pull request, we really appreciate it you add tests for the feature you've added. We can always use more test coverage. Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "A brief summary of the commit
    >
    > A paragraph describing what changed and its impact."

We have a Husky pre-push hook and GitHub actions working, so you're code will be tested and lint checked.

## Coding conventions

Start reading our code and you'll get the hang of it. We optimize for readability:

- We indent using two spaces (soft tabs)
- We're using the AirBnB standard
- Prettier and Eslint is setup which should guide you along the way

Thanks,
Daniel
