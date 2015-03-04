install:
	bower prune
	bower install
	python -m SimpleHTTPServer 4000
