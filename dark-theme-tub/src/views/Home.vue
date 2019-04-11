<template>
  <div class="home">
    <v-container grid-list-md>
      <v-layout>
        <v-flex xs12>
          <v-list>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon>extension</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Plugin for UserCSS</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <div>
              First download a plug-in for your web browser to install the CSS. <br>
              We prefer '<a href="https://github.com/openstyles/stylus">Stylus</a>'.
              <ul>
                <li>Stylus</li>
                <ul>
                  <li>for Chrome: <br>
                    <a href="https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne">
                      Install Chrome extension
                    </a>
                  </li> <br>
                  <li>for Firefox: <br>
                    <a href="https://addons.mozilla.org/firefox/addon/styl-us/"> Install Firefox
                      extension
                    </a>
                  </li> <br>
                  <li>for Opera: <br>
                    <a href="https://addons.opera.com/extensions/details/stylus/"> Install Opera
                      extension
                    </a>
                  </li>
                </ul>
              </ul>
              <div class="window__content__text">
                For Safari on Mac, we recommend '<a href="https://cascadea.app/">Cascadea</a>'.
              </div>
            </div>
          </v-list>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs4>
          <v-card color="accent">
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container
                fill-height
                fluid
              >
                <v-layout fill-height>
                  <v-flex
                    xs12
                    align-end
                    flexbox
                  >
                    <span class="headline">ISIS TUB</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span>ISIS TUB</span><br>
                <span>Dark theme for most isis modules and overall isis site.</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn
                flat
                color="success"
              >Install</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card color="accent">
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container
                fill-height
                fluid
              >
                <v-layout fill-height>
                  <v-flex
                    xs12
                    align-end
                    flexbox
                  >
                    <span class="headline">MOSES</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span>MOSES</span><br>
                <span>Dark theme for most isis modules and overall isis site.</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn
                flat
                color="success"
              >Install</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card color="accent">
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container
                fill-height
                fluid
              >
                <v-layout fill-height>
                  <v-flex
                    xs12
                    align-end
                    flexbox
                  >
                    <span class="headline">ISIS TUB</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span>ISIS TUB</span><br>
                <span>Dark theme for most isis modules and overall isis site.</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn
                flat
                color="success"
              >Install</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
    name: "home",
};
</script>

<style lang="scss" scoped>
a {
    color: #319ae3;
}
</style>

