install:
	npm prune
	npm install

test: install
	npm test

run: install
	npm start
