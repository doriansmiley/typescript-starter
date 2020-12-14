# Simple CLI for Starting TypeScript Projects
This CLI will generate a boilerplate project with eslint, husky, prettier, and .github.
Doc generation support is included with `typedoc`. Webpack is setup by default with UMD module support
to enable testing in Karma + Jasmine. Browserfy is installed, so it if you prefer to import
modules you can. There are a few other goodies such as a change log.

# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

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
