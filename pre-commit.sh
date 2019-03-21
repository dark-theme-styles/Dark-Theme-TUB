#!/bin/sh
echo "[OK] creating todos ..."
leasot --reporter json **/*.css > todos.json
# check if file exists
if [ ! -f todos.json]; then
	echo "File not found!"
	exit 1
fi
# add the created file to the commit
git add todos.json
echo "✔️   added <todos.json> to commit"
