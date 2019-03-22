#!/bin/sh
# define emojis here because they are somehow bugged if you use whitespace after inserting them
work_emoji="⚙️ "
check_emoji="✔️ "
error_emoji="❌ "

commit_abort="commit abort." 

# create the todos json file
echo "$work_emoji creating todos ..."
./node_modules/.bin/leasot --reporter json "*.css" "./docs/**/*.scss" "./docs/**/*.html" "./docs/**/*.js" --ignore "docs/styles/css/" > docs/todos.json
# move into docs direcory
cd docs
# check if json file exists
if [ ! -f todos.json ] ; then
	echo "$error_emoji <todos.json> file not found!"
	echo "$error_emoji $commit_abort"
	exit 1
fi
# move out of folder 
cd ..
# add the created file to the commit
git add docs/todos.json
echo "$check_emoji added <todos.json> to commit"
# create line content
echo "$work_emoji extracting line content ..."
if python3 extract_file_lines.py; then
	# add created file to commit
	git add docs/todos_line_extractions.json
	echo "$check_emoji added <todos_line_extractions.json> to commit"
else
	echo "$error_emoji error while running python line extractor!"
	echo "$error_emoji $commit_abort"
	exit 1
fi
