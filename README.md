# Typescript npm module seed

[![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url]

Typescript module seed

## Features

* **Developping**: TODO
    * Latest typescript version
    * Multiple tsconfig files
* **Testing**: mocha/chai for testing
    * ts-node for on-the-fly test compilation
    * code coverage with istanbul
* **Publishing** proper .npmignore so published module only has the necessary sources

## Build

`npm run build`

## Test 

### Runing tests

`npm run test`

### Test with coverage

`npm run cover`

## Starting a new project

* git clone the repository
* remove .git
* npm install
* npm run typings install

## Commands
* **npm run build** - run tsc
* **npm run build:watch** - run tsc in watch-mode
* **npm run clean** - delete *build* directory
* **npm run lint** - runs tslint
* **npm run node** - run ts-node to get a REPL or run a script, e.g. a spike: npm run node src/spikes/consolespike.ts
* **npm test** - run mocha on all *.ts files in *test/*
* **npm run test:watch** - re-run mocha on all *.ts files in *test/* everytime a file changes
* **npm run typings** - run locally installed typings. Note you need to use -- before using options, e.g. *npm run typings install dt~commander -- --global --save*


## License

MIT © [Stéphane Léonard]()