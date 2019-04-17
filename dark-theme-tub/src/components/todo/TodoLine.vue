<template>
  <v-container
    fluid
    pa-0
  >
    <v-layout>
      <v-flex
        xs1
        grow
      >
        <v-card
          color="primary"
          height="100%"
          flat
          tile
        >
          <v-card-text class="pa-2 error--text text-xs-right" >{{line}}.</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs1>
        <v-card
          color="primary"
          height="100%"
          flat
          tile
        >
          <v-card-text class="pa-2 success--text text-xs-center">{{todoType}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs10>
        <v-card
          color="primary"
          height="100%"
          flat
          tile
        >
          <v-card-text class="pa-2 info--text">{{comment}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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

