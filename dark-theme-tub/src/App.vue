<template>
  <v-app id="app" dark>
    <div id="nav">
      <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Dark Theme TUB</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat><router-link to="/">Home</router-link></v-btn>
          <v-btn flat><router-link to="/preview">Preview</router-link></v-btn>
          <v-btn flat><router-link to="/todo">Todo</router-link></v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <router-view />
  </v-app>
</template>

<style lang="scss">
#app {
    // font-family: "Avenir", Helvetica, Arial, sans-serif;
    font-family: "Source Code Pro", monospace !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    // color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
