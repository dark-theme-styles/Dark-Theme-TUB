<template>
  <!-- <v-card color="accent">
    <v-flex
      xs12
      align-end
      flexbox
    >
    <v-card-title>
      <span class="headline">{{headline}}</span>
      </v-card-title>
      
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
  </v-card>-->

  <v-card color="accent">
    <!-- <v-flex
      xs12
      align-end
      flexbox
    >-->
    <v-layout column justify-space-between fill-height>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{headline}}</h3>
          <div class="mt-4">{{content}}</div>
        </div>
      </v-card-title>
      <!-- </v-flex> -->
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
.headline {
    // padding-left: 10px;
    // margin-bottom: 10px;
    // color: #ff3c4e;
}
</style>


