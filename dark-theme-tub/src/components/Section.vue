<template>
  <v-list>
    <v-list-tile class="pb-2">
      <v-list-tile-avatar id="v-list-tile-avatar">
        <v-icon>{{icon}}</v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{title}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <slot></slot>
  </v-list>
</template>


<script>
export default {
    name: "Section",
    props: {
        icon: String,
        title: String
    }
};
</script>


