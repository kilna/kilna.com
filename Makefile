# Simple Hugo Makefile for kilna.com
SHELL := /usr/bin/env bash

# Set HUGO_BASEURL for Cloudflare Pages deployment
ifeq ($(CF_PAGES),true)
ifeq ($(CF_PAGES_BRANCH),main)
export HUGO_BASEURL=https://kilna.com
else
export HUGO_BASEURL=https://$(CF_PAGES_BRANCH).kilna.com
endif
else
-include .env
endif

.PHONY: build server clean deploy help

build:
	hugo

server:
	hugo server --disableFastRender

clean:
	rm -rf public

deploy: build
	@echo "Site built successfully. Ready for deployment to Cloudflare Pages."

help:
	@echo "Available targets:"
	@echo "  build  - Build the site"
	@echo "  server - Start development server"
	@echo "  clean  - Remove generated files"
	@echo "  deploy - Build site for deployment"
	@echo "  help   - Show this help message"
