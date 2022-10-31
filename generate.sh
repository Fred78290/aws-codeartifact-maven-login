#!/bin/bash

ncc build index.js --license licenses.txt -o dist/action
ncc build cleanup.js --license licenses.txt -o dist/cleanup