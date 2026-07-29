#!/usr/bin/env sh
set -eu
test -f src/index.html
test -f src/style.css
test -f src/app.js
test -f src/healthz
grep -q "StatusPage" src/index.html
grep -q "operational" src/app.js
test "$(cat src/healthz)" = "OK"
echo "Validation réussie"


