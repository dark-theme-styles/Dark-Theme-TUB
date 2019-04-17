<template>
  <v-card id="image-cards" color="accent">
    <v-img :src="imageSrc" width="200px" height="200px" :alt="titleName + ' profile picture'"></v-img>

    <v-card-title primary-title id="v-card-title">
      <div>
        <h3 class="headline mb-0">
          {{titleName}}
          <a :href="linkHref" target="_blank">
            <v-icon id="user-link">link</v-icon>
          </a>
        </h3>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
    name: "ImageCard",
    props: {
        imageSrc: String,
        titleName: String,
        linkHref: String
    }
};
</script>

<style lang="scss" scoped>
#user-link {
    color: rgb(49, 154, 227);
}

#image-cards {
    width: 200px;
    height: 100%;
}
#image {
    height: 200px;
    width: 100%;
}
</style>


