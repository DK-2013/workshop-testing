install: install-deps install-flow-typed

run:
	npx babel-node -- 'src/bin/weather.js' berlin

install-deps:
	npm i

install-flow-typed:
	npx flow-typed install

build:
	rm -rf dist
	npm run build

test:
	npm test

check-types:
	npx flow

lint:
	npx eslint .

publish:
	npm publish --dry-run

republish:
	npm publish --dry-run
	npm link

.PHONY: test
