<template>
  <v-flex xs12>
    <v-card id="theme-card" color="accent">
      <v-layout column justify-space-between fill-height>
        <v-card-title primary-title>
          <div>
            <h3 id="theme-card-headline" class="headline mb-0">{{headline}}</h3>
            <div id="theme-card-content" class="mt-4">{{content}}</div>
          </div>
        </v-card-title>
        <v-card-actions id="v-card-actions">
          <v-tooltip v-if="showTooltip" bottom color="#424242">
            <template v-slot:activator="{on}">
              <v-btn
                block
                raised
                color="success"
                v-on="on"
                :href="link"
                target="_blank"
              >{{buttonText}}</v-btn>
            </template>
            <span>coming soon™</span>
          </v-tooltip>
          <v-btn v-else block raised color="success" :href="link" target="_blank">{{buttonText}}</v-btn>
        </v-card-actions>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
    name: "ThemeCard",
    props: {
        headline: String,
        content: String,
        buttonText: String,
        link: String,
        showTooltip: Boolean
    }
    // ,
    // computed: {
    //     showTooltipValue: function() {
    //         return this.showTooltip ? { on } : { off };
    //     }
    // }
};
</script>

<style lang="scss" scoped>
#theme-card {
    // min-height: 210px;
    // height: 100%;
    height: 100%;
    // min-height: 210px;
    min-width: 140px;
}
#v-card-actions {
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
}

.break {
    word-break: break-all;
}
</style>

