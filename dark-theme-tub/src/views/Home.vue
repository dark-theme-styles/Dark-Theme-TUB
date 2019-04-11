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
            >-->
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
              <v-btn
                block
                raised
                color="success"
                href="https://raw.githubusercontent.com/dark-theme-styles/Dark-Theme-TUB/master/dark-theme-isis-tub.user.css"
                target="_blank"
              >Install UserCSS</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card color="accent">
            <!-- <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >-->
            <!-- <v-container fill-height fluid>
            <v-layout fill-height>-->
            <v-flex xs12 align-end flexbox>
              <span class="headline">MOSES TUB</span>
            </v-flex>
            <!-- </v-layout>
            </v-container>-->
            <!-- </v-img> -->
            <v-card-title>
              <div>
                <!-- <span>ISIS TUB</span>
                <br>-->
                <span>Dark theme for most MOSES TUB modules and overall MOSES TUB site.</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn
                block
                raised
                color="success"
                href="https://raw.githubusercontent.com/dark-theme-styles/Dark-Theme-TUB/master/dark-theme-moses-tub.user.css"
                target="_blank"
              >Install UserCSS</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card color="accent">
            <!-- <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >-->
            <!-- <v-container fill-height fluid>
            <v-layout fill-height>-->
            <v-flex xs12 align-end flexbox>
              <span class="headline">Homepage TUB</span>
            </v-flex>
            <!-- </v-layout>
            </v-container>-->
            <!-- </v-img> -->
            <v-card-title>
              <div>
                <!-- <span>ISIS TUB</span>
                <br>-->
                <span>Dark theme for TUB homepage.</span>
              </div>
            </v-card-title>
            <v-card-actions id="v-card-actions">
              <v-btn block raised color="success">soon™</v-btn>
            </v-card-actions>
            <!-- <v-footer>
              Hi
            </v-footer>-->
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
          <v-list>
            <v-list-tile>
              <v-list-tile-avatar id="v-list-tile-avatar">
                <v-icon>link</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Links</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <div class="text-container">
              <ul>
                <li>
                  Visit our Dark-Theme-TUB website for more informations:
                  <p>
                    <img
                      id="icons"
                      src="https://raw.githubusercontent.com/dark-theme-styles/dark-theme-styles.github.io/master/images/favicon/android-chrome-512x512.png"
                      alt="homepage favicon"
                    >
                    <a
                      href="https://dark-theme-styles.github.io/Dark-Theme-TUB"
                      target="_blank"
                    >visit project website</a>
                  </p>
                </li>
                <li>
                  Visit our Homepage for more dark theme projects:
                  <p>
                    <img
                      id="icons"
                      src="https://raw.githubusercontent.com/dark-theme-styles/dark-theme-styles.github.io/master/images/favicon/android-chrome-512x512.png"
                      alt="homepage favicon"
                    >
                    <a href="https://dark-theme-styles.github.io" target="_blank">visit Homepage</a>
                  </p>
                </li>
                <li>
                  GitHub Dark-Theme-TUB project:
                  <p>
                    <!-- <img
                      id="icons"
                      src="https://camo.githubusercontent.com/338c94ae4c561c07911004dffb4455bf39f10155/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f6c6f676f735f706167652f4769744875622d4d61726b2e706e67"
                      alt="github logo"
                    >-->
                    <a
                      href="https://github.com/dark-theme-styles/Dark-Theme-TUB"
                      target=" _blank"
                    >visit on GitHub</a>
                  </p>
                </li>
                <li>
                  GitHub Dark Theme Styles Organization page:
                  <p>
                    <!-- <img
                      id="icons"
                      src="https://camo.githubusercontent.com/338c94ae4c561c07911004dffb4455bf39f10155/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f6c6f676f735f706167652f4769744875622d4d61726b2e706e67"
                      alt="github logo"
                    >-->
                    <a href="https://github.com/dark-theme-styles" target="_blank">visit on GitHub</a>
                  </p>
                </li>
              </ul>
            </div>
            <br>
            <v-list-tile id="v-list-tile">
              <v-list-tile-avatar id="v-list-tile-avatar">
                <v-icon>code</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Authors</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <div class="window__content">
              
              <v-layout id="users-card">
                <v-layout>
                  <v-flex xs6 offset-xs3>
                    <v-card id="image-cards" color="accent">
                      <v-img
                        src="https://avatars1.githubusercontent.com/u/34386047"
                        width="200px"
                        height="200px"
                        alt="B4rtware profile picture"
                      ></v-img>

                      <v-card-title primary-title id="v-card-title">
                        <div>
                          <h3 class="headline mb-0">B4rtware <a href="https://github.com/B4rtware" target="_blank"><v-icon id="user-link">link</v-icon></a></h3>
                        </div>
                      </v-card-title>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout>
                  <v-flex xs6 offset-xs3>
                    <v-card id="image-cards" color="accent">
                      <v-img
                        src="https://avatars1.githubusercontent.com/u/38668040"
                        width="200px"
                        alt="Re-Krass profile picture"
                      ></v-img>

                      <v-card-title primary-title id="v-card-title">
                        <div>
                          <h3 class="headline mb-0">Re-Krass <a href="https://github.com/Re-Krass" target="_blank"><v-icon id="user-link">link</v-icon></a></h3>
                        </div>
                      </v-card-title>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-layout>
            </div>
          </v-list>
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

#users-card {
    padding-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
}

.headline {
    padding-left: 10px;
    // color: #ff3c4e;
}

.image-container {
    display: flex;
}

.image {
    margin: 20px;
}

#image {
    height: 200px;
    width: 100%;
}

#image-cards {
 width: 200px;
}

#v-card-title {
  height: 80px;
}

#user-link {
  color: rgb(49, 154, 227);
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
    #icons {
        height: 17px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        padding-right: 5px;
    }
}
</style>


