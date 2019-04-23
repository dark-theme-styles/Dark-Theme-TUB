<template>
  <div class="home">
    <v-container
      grid-list-md
      fluid
    >
      <v-layout>
        <v-flex xs12>
          <Section
            icon="extension"
            title="Plugin for UserCSS"
          >
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
                    <a href="https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne">Install Chrome extension</a>
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
          </Section>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
          <Section
            icon="code"
            title="Install UserCSS Style"
          >
            <v-layout
              id="install-card"
              wrap
            >
              <v-flex
                xs12
                sm6
                md4
              >
                <ThemeCard
                  headline="ISIS TUB"
                  content="Dark theme for most ISIS TUB modules and overall ISIS TUB site."
                  link="https://raw.githubusercontent.com/dark-theme-styles/Dark-Theme-TUB/master/dark-theme-isis-tub.user.css"
                  buttonText="Install UserCSS"
                ></ThemeCard>
              </v-flex>
              <v-flex
                xs12
                sm6
                md4
              >
                <ThemeCard
                  headline="MOSES TUB"
                  content="Dark theme for most Dark theme for most MOSES TUB modules and overall MOSES TUB site."
                  link="https://raw.githubusercontent.com/dark-theme-styles/Dark-Theme-TUB/master/dark-theme-moses-tub.user.css"
                  buttonText="Install UserCSS"
                ></ThemeCard>
              </v-flex>
              <v-flex
                xs12
                sm6
                md4
              >
                <ThemeCard
                  headline="Homepage TUB"
                  content="Dark theme for TUB homepage."
                  link
                  buttonText="soon™"
                  showTooltip
                ></ThemeCard>
              </v-flex>
            </v-layout>
          </Section>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
          <Section
            icon="link"
            title="Links"
          >
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
                    <a
                      href="https://dark-theme-styles.github.io"
                      target="_blank"
                    >visit Homepage</a>
                  </p>
                </li>
                <li>
                  GitHub Dark-Theme-TUB project:
                  <p>
                    <a
                      href="https://github.com/dark-theme-styles/Dark-Theme-TUB"
                      target="_blank"
                    >visit on GitHub</a>
                  </p>
                </li>
                <li>
                  GitHub Dark Theme Styles Organization page:
                  <p>
                    <a
                      href="https://github.com/dark-theme-styles"
                      target="_blank"
                    >visit on GitHub</a>
                  </p>
                </li>
              </ul>
            </div>
          </Section>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
          <Section
            icon="code"
            title="Authors"
          >
            <div class="window__content">
              <v-layout
                id="users-card"
                wrap
                justify-content-center
              >
                <v-layout justify-content-center>
                  <!-- <v-flex xs12 offset-xs2 offset-sm1 sm12 offset-md3> -->
                  <v-flex
                    xs12
                    offset-xs1
                    offset-sm1
                    sm12
                    offset-md3
                  >
                    <ImageCard
                      imageSrc="https://avatars1.githubusercontent.com/u/34386047"
                      titleName="B4rtware"
                      linkHref="https://github.com/B4rtware"
                    ></ImageCard>
                  </v-flex>
                </v-layout>

                <v-layout justify-content-center>
                  <v-flex
                    xs12
                    offset-xs1
                    offset-sm1
                    sm12
                    offset-md3
                  >
                    <ImageCard
                      imageSrc="https://avatars1.githubusercontent.com/u/38668040"
                      titleName="Re-Krass"
                      linkHref="https://github.com/Re-Krass"
                    ></ImageCard>
                  </v-flex>
                </v-layout>
              </v-layout>
            </div>
          </Section>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ThemeCard from "@/components/home/ThemeCard";
import ImageCard from "@/components/home/ImageCard";
import DialogWindow from "@/components/home/DialogWindow";
import Section from "@/components/Section";
// @ is an alias to /src
export default {
    name: "home",
    components: { ThemeCard, ImageCard, DialogWindow, Section }
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

.image-container {
    display: flex;
}

.image {
    margin: 20px;
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
            //border-bottom: 2px solid #c8c8c8;
            background-color:#363636;
            box-shadow: 0 2px 2px -1px black;
            padding-top: 0;

            #v-list-tile-avatar {
                min-width: 45px;
            }

            .text-container {
                color: #c8c8c8;
            }

            &__title {
                color: #ffffff;
            }
        }
    }

    .v-btn {
        text-transform: none;
    }

    .container {
        padding: 0;
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
