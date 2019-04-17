<template>
  <v-card
    id="theme-card"
    color="accent"
    height="100%"
    tile
  >
    <v-card-title primary-title>
      <div>
        <h3
          id="theme-card-headline"
          class="headline mb-0"
        >{{headline}}</h3>
        <div class="mt-4">{{content}}</div>
      </div>
    </v-card-title>
    <v-card-actions id="v-card-actions">
      <v-tooltip
        v-if="showTooltip"
        bottom
        color="#424242"
      >
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
      <v-btn
        v-else
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
        link: String,
        showTooltip: Boolean
    }
};
</script>

<style lang="scss" scoped>
.v-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>

