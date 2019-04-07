<template>
  <div id="todo">
    <v-expansion-panel :value="1">
      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Item</div>
        </template>
        <TodoLine
          :line="4"
          :todo-type="'TODO'"
          :comment="'Das ist ein kleines Kommentar mal sehen wie es ist wenn es zu lang ist'"
        />
        <TodoLine
          :line="4"
          :todo-type="'TODO'"
          :comment="'Das ist ein kleines Kommentar mal sehen wie es ist wenn es zu lang ist'"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import TodoLine from "@/components/todo/TodoLine";

export default {
    name: "Todo",
    components: {
        TodoLine
    }
};
</script>

