.PHONY: lint
lint:
	./node_modules/.bin/eslint --ext .ts . --fix

.PHONY: synth
synth:
	cdk synth

.PHONY: deploy
deploy:
	cdk deploy

.PHONY: destroy
destroy:
	cdk destroy

.PHONY: diff
diff:
	cdk diff

.PHONY: build
build:
	tsc
