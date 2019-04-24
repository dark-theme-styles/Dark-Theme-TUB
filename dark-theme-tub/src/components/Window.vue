<template>
  <div>
    <div id="nav">
      <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Dark Theme TUB</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>
            <router-link to="/">Home</router-link>
          </v-btn>
          <v-btn flat>
            <router-link to="/preview">Preview</router-link>
          </v-btn>
          <v-btn flat>
            <router-link to="/todo">Todo</router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>


