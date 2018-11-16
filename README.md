# Babel 7 external imports not being transpiled

## Problem

`main/` imports from `external/` using a module alias. Code imported from `external/` in `main/` is not transpiled and results in "Unexpected token import".

This works in Babel 6 (see [babel6](</babel6>)), but not in 7 (see [babel7](</babel7>)).

Node version: `8.11.2` (lts)

## Fix

When compiling your script in `main/` include `--ignore='node_modules'` that will make sure that packages other than node_modules are transpiled. Check this: https://github.com/adityak74/babel7-import-example/blob/master/babel7/main/package.json#L8

## Update - Working with babel-compile on Root

The latest commit updates the repo to work with compiling `main/index.js` from root of the repository. Although, doesn't work with compiling when you are in the monorepo and run the build.
