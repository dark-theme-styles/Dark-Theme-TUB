<template>
  <div id="todo">
    <div v-if="todoList">
      <v-expansion-panel
        v-model="openPanels"
        expand
      >
        <v-expansion-panel-content
          hide-actions
          class="primary"
          v-for="(todos, name, index) in todoList"
          :key="name"
        >
          <template v-slot:header>
            <span>
              <v-icon>{{openPanels[index] ? "folder_open" : "folder"}}</v-icon> {{name}}
            </span>
          </template>
          <div
            v-for="todo in todos"
            :key="todo.id"
          >
            <TodoLine
              :line="todo.line"
              :todo-type="todo.type"
              :comment="todo.comment"
            />
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
    <div v-else>
      <v-progress-linear
        color="error"
        :indeterminate="true"
        class="ma-0"
      ></v-progress-linear>
    </div>
  </div>
</template>

<script>
import TodoLine from "@/components/todo/TodoLine";
import axiosInstance from "@/store/api";

export default {
    name: "Todo",
    components: {
        TodoLine
    },
    methods: {
        getLineData: async function() {
            var lineExtractions = axiosInstance.get("todos_line_extractions.json");
            var todo = axiosInstance.get("todos.json");
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

                var todo_obj = {
                    id: queryString,
                    path: todo["file"],
                    line: todo["line"],
                    type: todo["tag"],
                    comment: todo["text"],
                    code: ""
                };

                // check if the container for the todo items with the desired file already exists
                if (!combinedTodoList.hasOwnProperty(fileName)) {
                    combinedTodoList[fileName] = [todo_obj];
                    continue;
                }

                combinedTodoList[fileName].push(todo_obj);
            }

            console.log(combinedTodoList);

            return combinedTodoList;
        }
    },
    data() {
        return {
            todoList: null,
            openPanels: [false, false, false, false, false, false, false]
        };
    },
    mounted() {
        getLineData().then(data => (this.todoList = data));
    },
    beforeRouteUpdate(to, from, next) {
        console.log("from todo");
    }
};
</script>

