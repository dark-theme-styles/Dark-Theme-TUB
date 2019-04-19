#!/bin/sh
# define emojis here because they are somehow bugged if you use whitespace after inserting them
work_emoji="⚙️ "
check_emoji="✔️ "
error_emoji="❌ "
warning_emoji="⚠️ "

commit_abort="commit abort." 

# create the todos json file
echo "$work_emoji creating todos ..."
./node_modules/.bin/leasot --reporter json "./*.css" "./dark-theme-tub/**/*.js" "./dark-theme-tub/**/*.html" "./dark-theme-tub/**/*.vue" --ignore "./dark-theme-tub/node_modules" > docs/todos.json
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

# check if to use the other python command
if ! type "python3" > /dev/null; then
	echo "$warning_emoji <python3> command not exists using <python>"
	if python extract_file_lines.py; then
		# add created file to commit
		git add docs/todos_line_extractions.json
		echo "$check_emoji added <todos_line_extractions.json> to commit"
		exit 0
	else
		echo "$error_emoji error while running python line extractor!"
		echo "$error_emoji $commit_abort"
		exit 1
	fi
fi

if python3 extract_file_lines.py; then
	# add created file to commit
	git add docs/todos_line_extractions.json
	echo "$check_emoji added <todos_line_extractions.json> to commit"
else
	echo "$error_emoji error while running python line extractor!"
	echo "$error_emoji $commit_abort"
	exit 1
fi

# extract verions for UserCSS files
if python extract_version.py; then
	# add created file to commit
	git add versions.json
	echo "$check_emoji added <versions.json> to commit"
else
	echo "$error_emoji error while running python version extractor!"
	echo "$error_emoji $commit_abort"
	exit 1
fi



