[![Build Status](https://travis-ci.com/DK-2013/workshop-testing-cli.svg?branch=master)](https://travis-ci.com/DK-2013/workshop-testing-cli)

##
# Work shop Auto testing
[Hexlet (in Russian)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=nodejs-package)
##

## Setup

```sh
$ make install
```

## Run tests

```sh
$ make test
```

## Run CLI
```sh
$ make run
```

## Usage:

```sh
$ weather -h
Usage: weather [options] <city> [prop]

weather city [prop]
  prop: temp/erature/ (default)
        hum/idity/

Options:
  -h, --help  output usage information

$ weather berlin
10

$ weather berlin hum
75
```