help:
	@echo "This Makefile provides the following targets:"
	@echo ""
	@echo " compile: Compiles the project."
	@echo ""
	@echo "Usage:"
	@echo "  make [target]"
	@echo ""
	@echo "Example:"
	@echo "  make compile"
	@echo ""
	@echo "To get help on a specific target, you can run:"
	@echo "  make help"

compile:
	npx ncc build index.js --license LICENSE
