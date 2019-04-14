<template>
  <v-card id="theme-card" color="accent">
    <v-layout column justify-space-between fill-height>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{headline}}</h3>
          <div class="mt-4">{{content}}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn block raised color="success" :href="link" target="_blank">{{buttonText}}</v-btn>
      </v-card-actions>
    </v-layout>
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
#theme-card {
    height: 190px;
}
</style>


