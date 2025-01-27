#!/bin/bash

cd $(dirname "$0");

# update typescript
tsc

# make libary bundle
../node_modules/.bin/esbuild dist/library_page.js --bundle --outfile=library_pg_bun.js

# make tournament bundle

../node_modules/.bin/esbuild dist/tournament_page.js --bundle --outfile=library_pg_bun.js

echo "All Done!"
