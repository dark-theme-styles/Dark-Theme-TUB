#!/bin/bash
# define emojis here because they are somehow bugged if you use whitespace after inserting them
work_emoji="⚙️ "
check_emoji="✔️ "
error_emoji="❌ "

# create the todos json file
echo "$work_emoji creating todos ..."
leasot --reporter json **/*.css > todos.json
# check if json file exists
if [ ! -f todos.json ] ; then
	echo "$error_emoji <todos.json> file not found!"
	exit 1
fi
# add the created file to the commit
git add todos.json
echo "$check_emoji added <todos.json> to commit"
