<template>
  <div class="home">
    <v-container grid-list-md>
      <v-layout>
        <v-flex xs4>
          <v-card color="primary">
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
                color="orange"
              >Install</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card color="primary">
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
                color="orange"
              >Install</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card color="primary">
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
                color="orange"
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
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {
        HelloWorld
    }
};
</script>
