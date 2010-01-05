
NODE = node

test:
	@$(NODE) spec/node.js
	
.PHONY: test