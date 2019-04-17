<template>
  <div id="app">
    <v-app id="inspire">
      <div class="text-xs-center">
        <v-btn
          :disabled="dialog"
          :loading="dialog"
          class="white--text"
          color="purple darken-2"
          @click="dialog = true"
        >Start loading</v-btn>
        <v-dialog v-model="dialog" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>coming soon™</v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false
        };
    },

    watch: {
        dialog(val) {
            if (!val) return;

            setTimeout(() => (this.dialog = false), 4000);
        }
    }
};
</script>