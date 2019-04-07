<template>
  <div class="home">
    <v-container grid-list-md fluid>
      <v-layout>
        <v-flex xs12>
          <v-list>
            <v-list-tile>
              <v-list-tile-avatar id="v-list-tile-avatar">
                <v-icon>extension</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Plugin for UserCSS</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <div class="text-container">
              First download a plug-in for your web browser to install the CSS.
              <br>We prefer
              <a href="https://github.com/openstyles/stylus">'Stylus'</a>.
              <ul>
                <li>Stylus</li>
                <ul>
                  <li>
                    for Chrome:
                    <br>
                    <a
                      href="https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne"
                    >Install Chrome extension</a>
                  </li>
                  <li>
                    for Firefox:
                    <br>
                    <a href="https://addons.mozilla.org/firefox/addon/styl-us/">
                      Install Firefox
                      extension
                    </a>
                  </li>
                  <li>
                    for Opera:
                    <br>
                    <a href="https://addons.opera.com/extensions/details/stylus/">
                      Install Opera
                      extension
                    </a>
                  </li>
                </ul>
              </ul>
              <div class="window__content__text">
                For Safari on Mac, we recommend
                <a href="https://cascadea.app/">'Cascadea'</a>.
              </div>
            </div>
            <br>
            <v-list-tile id="v-list-tile">
              <v-list-tile-avatar id="v-list-tile-avatar">
                <v-icon>code</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Install UserCSS style</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <div class="text-container">
              <ul>
                <li>Install dark theme for:</li>
              </ul>
            </div>
          </v-list>
        </v-flex>
      </v-layout>
      <v-layout id="install-card">
        <v-flex xs4>
          <v-card color="accent">
            <!-- <v-img
              id="img-isis-tub"
              class="white--text"
              width="207px"
              :src="require('@/assets/img/screenshots/isis-tub/ISIS-TUB_Screenshot_1.jpg')"
            > -->
             <!-- <v-container fill-height fluid> -->
                <!-- <v-layout fill-height> -->
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">ISIS TUB</span>
                  </v-flex>
                <!-- </v-layout> -->
              <!-- </v-container> -->
            <!-- </v-img> -->
            <v-card-title>
              <div>
                <!-- <h3>ISIS TUB</h3> -->
                <span>Dark theme for most ISIS TUB modules and overall ISIS TUB site.</span>
                <br>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn block raised color="success">Install UserCSS</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card color="accent">
            <!-- <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            > -->
              <!-- <v-container fill-height fluid>
                <v-layout fill-height> -->
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">MOSES TUB</span>
                  </v-flex>
                <!-- </v-layout>
              </v-container> -->
            <!-- </v-img> -->
            <v-card-title>
              <div>
                <!-- <span>ISIS TUB</span>
                <br>-->
                <span>Dark theme for most MOSES TUB modules and overall MOSES TUB site.</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn block raised color="success">Install UserCSS</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card color="accent">
            <!-- <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            > -->
              <!-- <v-container fill-height fluid>
                <v-layout fill-height> -->
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Homepage TUB</span>
                  </v-flex>
                <!-- </v-layout>
              </v-container> -->
            <!-- </v-img> -->
            <v-card-title>
              <div>
                <!-- <span>ISIS TUB</span>
                <br>-->
                <span>Dark theme for TUB homepage.</span>
              </div>
            </v-card-title>
            <v-card-actions id="v-card-actions">
              <v-btn block raised color="success">Install UserCSS</v-btn>
            </v-card-actions>
            <!-- <v-footer>
              Hi
            </v-footer>-->
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {
        HelloWorld
    }
};
</script>

<style lang="scss" scoped>
a {
    color: #319ae3;
}
.text-container {
    padding-left: 20px;
    padding-top: 5px;
}
ul ul li {
    padding-bottom: 5px;
}

#install-card {
    padding-top: 3px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
}

.headline {
    padding-left: 10px;
    // color: #ff3c4e;
}

// ::v-deep .v-list__tile {
::v-deep {
    .theme--dark.v-list {
        background-color: transparent;
    }
    .v-list {
        padding: 0;

        &__tile {
            height: 35px !important;
            padding-left: 5px !important;
            border-bottom: 2px solid #c8c8c8;
            padding-top: 0;

            #v-list-tile-avatar {
                min-width: 45px;
            }

            .text-container {
                color: #c8c8c8;
            }

            &__title {
                color: #c8c8c8;
            }
        }
    }

    .v-btn {
        text-transform: none;
    }

    .container {
        padding: 0;
    }
    .v-card {
        height: 100%;
    }
    .v-card__title {
        height: 110px;
    }
    #v-card-actions {
        bottom: 0;
    }
    #img-isis-tub {
        border-bottom: 2px solid white;
    }
}
</style>


