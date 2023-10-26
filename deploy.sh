#!/bin/bash
rm -rf dist .output node_modules
(PATH=/opt/plesk/node/18/bin:$PATH; npm install && npm run build &> npm.log)