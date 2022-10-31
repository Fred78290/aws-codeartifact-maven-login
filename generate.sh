#!/bin/bash

ncc build index.js -o dist/action
ncc build cleanup.js -o dist/cleanup