# Release Process

After you've finished development and code review changes, but before merging your PR, run

`yarn version`

This will prompt you to update the version, which will update the version in the package.json and push a new tag.

After merging your PR, a new release will be automatically created from the tag that matches the version in package.json.
