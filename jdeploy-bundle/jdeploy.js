#! /usr/bin/env node
"use strict";

const NpmGroovyLint = require("./groovy-lint.js");

const linter = new NpmGroovyLint(process.argv, {});
linter.run();