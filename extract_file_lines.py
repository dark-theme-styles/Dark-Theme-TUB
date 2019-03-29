from pathlib import Path
import json

line_threshold = 5

with open("docs/todos.json", "r") as file:
    todo_file_content = file.read()

json_todo = json.loads(todo_file_content)

todo_extract = {}
for todo in json_todo:
    with open(todo["file"], "r") as file:
        file_lines = file.readlines()

    line_list = []
    for index in range(line_threshold * 2 + 1):
        line_index = todo["line"] - line_threshold + index
        if line_index < 1:
            continue
        line_list.append((line_index, file_lines[line_index - 1]))

    key = "{} {}".format(todo["file"], todo["line"])
    todo_extract[key] = {
        "file": todo["file"],
        "line": todo["line"],
        "line_content": line_list
    }

with open("docs/todos_line_extractions.json", "w") as file:
    file.write(json.dumps(todo_extract))