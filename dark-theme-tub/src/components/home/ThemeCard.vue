<template>
  <v-card color="accent">
    <v-flex
      xs12
      align-end
      flexbox
    >
      <span class="headline">{{headline}}</span>
    </v-flex>
    <v-card-title>
      <div>
        <span>{{content}}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn
        block
        raised
        color="success"
        :href="link"
        target="_blank"
      >{{buttonText}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: "ThemeCard",
    props: {
        headline: String,
        content: String,
        buttonText: String,
        link: String
    }
};
</script>

<style lang="scss" scoped>
.headline {
    padding-left: 10px;
    // color: #ff3c4e;
}
</style>


