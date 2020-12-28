# Simple CLI for Starting TypeScript Projects
This CLI will generate a boilerplate project with eslint, husky, prettier, and .github.
Doc generation support is included with `typedoc`. Webpack is setup by default with UMD module support
Outputting a UMD modules allows you to consume the module in the following ways:
- ES2015 module import
- CommonJS module require
- AMD module require
- Imported in your `karm.config`

There are a few other goodies such as a change log.

# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

To perform a dry run locally execute:
```bash
npm run schamtic:dryrun
```
To write files execute:
```bash
npm run schamtic:run
```
Both commands supply default params for project name (`test`) and target directory (`./tmp`). See `package.json` for details.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
