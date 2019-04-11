<template>
  <div id="todo">
    <div v-if="todoList">
      <v-expansion-panel
        v-for="todo in todoList"
        :key="todo.id"
      >
        <v-expansion-panel-content>
          <template v-slot:header>
            <div>{{todo.path}}</div>
          </template>
          <TodoLine
            :line="'s'"
            :todo-type="'TODO'"
            :comment="'Das ist ein kleines Kommentar mal sehen wie es ist wenn es zu lang ist'"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
    <div v-else>
      <v-container>
        <v-layout
          justify-center
          fill-height
        >
          <v-flex shrink>
            <v-progress-circular
              indeterminate
              color="warning"
            ></v-progress-circular>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import TodoLine from "@/components/todo/TodoLine";
import axios from "axios";

async function getLineData() {
    var lineExtractions = axios.get(
        "https://dark-theme-styles.github.io/Dark-Theme-TUB/todos_line_extractions.json"
    );
    var todo = axios.get("https://dark-theme-styles.github.io/Dark-Theme-TUB/todos.json");
    const lines = (await lineExtractions).data;
    const todos = (await todo).data;

    var combinedTodoList = {};

    // combine todos and lines
    for (let todo of todos) {
        var fileName = todo["file"];
        var queryString = `${todo["file"]} ${todo["line"]}`;
        var lineContent = lines[queryString];
        if (!lineContent) {
            alert(
                "line_content not found!\nPlease run manually the script <todos_lines_extraction.py> to extract lines and upload the file!\n(todos.json is newer than todos_line_extractions.json)"
            );
            console.error(
                "line_content not found!\n Please run manually the script to extract lines and upload the file!\n(todos.json is newer than todos_line_extractions.json)"
            );
        }
        var split_file_string = todo["file"].split(".");
        var type = split_file_string[split_file_string.length - 1];

var todo = {
            id: queryString,
            path: todo["file"],
            line: todo["line"],
            todoType: todo["tag"],
            comment: todo["text"],
            code: ""
        }

        // check if the container for the todo items with the desired file already exists
        if (!combinedTodoList.hasOwnProperty(file_name)) {
            combinedTodoList[file_name] = [todo];
        }

        combinedTodoList[todo["file"]].push(todo);
    }

    console.log(combinedTodoList);

    return combinedTodoList
}

export default {
    name: "Todo",
    components: {
        TodoLine
    },
    data() {
        return {
            todoList: null
        };
    },
    mounted() {
        getLineData()
          .then(data => (this.todoList = data))
    }
};
</script>

