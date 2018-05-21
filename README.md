# Typescript npm module seed

[![NPM Version][npm-image]][npm-url] 
[![Build Status][travis-image]][travis-url]
[![Coverage][coveralls-image]][coveralls-url]
[![Maintainability](https://api.codeclimate.com/v1/badges/9bd2e45bce738c221232/maintainability)](https://codeclimate.com/github/scallacs/typescript-node-module-seed/maintainability)

Typescript module seed

## Features

* **Developping**: 
    * Latest typescript version
    * Multiple tsconfig files
* **Testing**: mocha/chai for testing
    * ts-node for on-the-fly test compilation
    * code coverage with istanbul
* **Publishing** proper .npmignore so published module only has the necessary sources
* **Continuous integration** with travis CI 


## Project architecture

- **dist** : distribution folder (build folder)
- **gen**: contains generated files
    - **coverage**: code coverage report
- **lib**: your source folder
- **test**: Test folder
    - **testcase** contains testing file
    - **bootstrap.ts** bootstrap file for tests
    - **mocha.opts** mocha options file


## Starting a new project

* git clone the repository
* remove .git and add your own repository
* npm install

### Development

#### Add new typings file

TODO

### Build

`npm run build`

### Test 

It uses mocha for testing. Files that ends with `.spec.ts` are test file (See mocha option file [./test/mocha.opts](./test/mocha.opts)). 

Use the following shortcuts to run tests:

- `npm run test` - Tests only


#### Code coverage 

- `npm run cover` - Run tests with coverage
- `npm run show-coverage` - Show code coverage report (Located in [./gen/coverage](./gen/coverage/index.html))

If you want to set up code coverage measurements in a project, there are usually 4 things that you’ll need:
- a test runner: **mocha**
- a code coverage tool **istanbul/nyc**, to generate code coverage reports
- a code coverage insight service **Coveralls**, to provide you a nice visualization of your code coverage data
- a reporting tool **node-coveralls, codecov.io**, to send your reports to some service

For more information about code coverage see this [article](http://codeheaven.io/javascript-code-coverage-with-instanbul-and-coveralls/).

### Continous Integration

TODO

## Commands

All commands in [package.json](./package.json)

* **npm run build** - run tsc
* **npm run build:watch** - run tsc in watch-mode
* **npm run clean** - delete *build* directory
* **npm run lint** - runs tslint
* **npm test** - run mocha on all *.ts files in *test/*

* **npm run node** - run ts-node to get a REPL or run a script, e.g. a spike: npm run node src/spikes/consolespike.ts
* **npm run test:watch** - re-run mocha on all *.ts files in *test/* everytime a file changes

## License

MIT © [Stéphane Léonard]()


[npm-url]: https://www.npmjs.org/package/@dfordev/typescript-node-module-seed
[npm-image]: http://img.shields.io/npm/v/@dfordev/typescript-node-module-seed.svg?style=flat-square

[travis-url]: http://travis-ci.org/scallacs/typescript-node-module-seed
[travis-image]: http://img.shields.io/travis/scallacs/typescript-node-module-seed.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/scallacs/typescript-node-module-seed
[coveralls-image]: https://img.shields.io/coveralls/scallacs/typescript-node-module-seed/master.svg?style=flat-square

