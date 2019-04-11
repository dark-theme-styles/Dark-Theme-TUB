<template>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <template v-slot:header>
        <v-container
          fluid
          pa-0
        >
          <v-layout>
            <v-flex
              xs1
              offset-xs2
            >
              <v-card
                color="error"
                height="100%"
                flat
                tile
              >
                <v-card-text>line {{line}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs1>
              <v-card
                color="success"
                height="100%"
                flat
                tile
              >
                <v-card-text>{{todoType}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-card
                color="info"
                height="100%"
                flat
                tile
              >
                <v-card-text>{{comment}}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </template>
      <v-card color="info">
        <pre v-highlightjs="code"><code class="javascript"></code></pre>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
    name: "TodoLine",
    props: {
        line: Number,
        todoType: {
            type: String,
            validator: val => ["TODO", "FIXME"].includes(val)
        },
        comment: String,
        code: String
    }
};
</script>

<style lang="scss" scoped>
#first {
    background-color: red;
}

::deep .v-expansion-panel__header {
  padding: 0;
}
</style>

