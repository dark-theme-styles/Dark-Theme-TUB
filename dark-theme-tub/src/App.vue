<template>
  <v-app id="app" dark>
    <v-content id="v-content">
      <v-card id="window" color="primary" class="shake-animation">
        <div id="nav">
          <v-toolbar flat color="success">
            <v-toolbar-title>
              $: {{headerTextCurrent}}
              <transition name="cursor-fade">
                <span v-if="typingText">_</span>
              </transition>
            </v-toolbar-title>
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
            <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
            <v-btn flat icon color="error" @click="shakeAnimationF">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
        <router-view/>
        <v-footer height="23" class="pa-2 caption">
          <v-spacer></v-spacer>
          <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import { setInterval, clearInterval, setTimeout } from "timers";
export default {
    name: "App",
    methods: {
        shakeAnimationF() {
            var animation_elements = [document.getElementById("window")];
            for (let anim_elem of animation_elements) {
                anim_elem.classList.toggle("shake-animation-active");
                setTimeout(() => {
                    anim_elem.classList.remove("shake-animation-active");
                }, 300);
            }
        }
    },
    data() {
        return {
            headerText: this.$route.name,
            headerTextCurrent: "",
            intervallID: null,
            typingText: true
        };
    },
    watch: {
        $route: function() {
            // reset interval and string
            clearInterval(this.intervallID);
            this.typingText = true;
            this.headerTextCurrent = "";
            this.headerText = this.$route.name;
            var maxLen = this.headerText.length;
            var delay = 200 / maxLen;
            // using es6 shorthand function declaration ovverides the this var to local so the parent this will be overriden
            var self = this;
            this.intervallID = setInterval(() => {
                var curLen = self.headerTextCurrent.length;
                self.headerTextCurrent += self.headerText[curLen];

                if (self.headerTextCurrent.length >= maxLen) {
                    clearInterval(self.intervallID);
                    setTimeout(() => {
                        self.typingText = false;
                    }, 500);
                }
            }, delay);
        }
    }
};
</script>


<style lang="scss">
html {
    /* own scrollbar */
    /* scrollbar firefox */
    scrollbar-color: rgb(110, 110, 110) rgb(1, 1, 1);
}

.cursor-fade-leave-active {
    transition: all 0.8s ease;
}

.cursor-fade-enter,
.cursor-fade-leave-to {
    opacity: 0;
}

#app {
    // font-family: "Avenir", Helvetica, Arial, sans-serif;
    font-family: "Source Code Pro", monospace !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // line-height: 1rem;
    // text-align: center;
    // color: #2c3e50;
    background-color: #1e1e1e;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEJklEQVRogdXaW08TQRTA8dO1u5PNviiFiIpG0CjeQdGoX6UQAiF8KhIeSF/4IBoviHdA5eI1JtLW+OBadtIxp+nQYXZntrDbdnYSbvNnApTt+dHQ3NjYGDDGGi/1ev2i4zhl3/ery8vLgGtqakrsVxzH+anpDxzHWV9YWKjath3VJxzH2dScb6dv+b5f0fQd3/d3ebegtS4AwKdarVb1PO8E7k5PTwsZRgFgTdPvA8Bj7PPz81H9DgA815xvt1di+q7nef2889/gCGNsq16v81sCe8F13XJz7zJjbEPT7zHGnvK+tLQExWJR7OOMsVXN+aje77ruboI+4LruL/wBhxlj2zzwt57nge/7Bdu2C4yxD5qON84zTT/LGHvZod5v2/aQpg9YlNI/oFiEkD5KaTm6NvowpXQrFFp9iFL6NRTS62copd9CodVPW/l8vswY6wtVgIsA8FHTb+M1r+k3AeBVSr0Qqq2+q+sW3l9KpVIll8uJX+QqDhz+QS6Xk/tDAHih6XcB4HWKvdxGL0T1PL6anJzEa7eSz+dPBEEwCADv5ZtD6KOlUumR2GZmZsSO0/iZ5nyS3hcEwYiil6O6hY7wRSkdJIT8lA8LfZQQsi7uzc7Oiv0CIWQzdDC9PtJGPzATRAdDzkkr5Nzc3Jz4GSHHpNWtXhH7scFBvCLhMgBs4IjFtbe39y8IAhzRfnPvHgA84X1xcfEfOif0cbxPas53oiMRf+M6OnjJYOeS9n7LcOeSdq2D3XQuaY9y8AZSoXKw284l7bKTEwDwBhQO9tK5NJwcxiuP78sO9tq5pH1Y52BWnFN1nBkrcucOmujcYfoYAKyqHLybYecKzceDr1TdyrhziR4PmuRcVG84p+nXkQqVg6Y5J/d95xQdB9JbUDioc8aEPiI6F9HRwRW+LztounOhx3tSRwe3xT3RwUw6Jyyk4oXKwSw6J/ZbOJCiusUPyzeH53nlWq1WMKDjN/9S0xvTVtWtGGeMd45S+j0UhG6yg205l1UH23Yurpvo4KGci+umOXho5+K6SQ4eybm4boqDR3YuCw4mcs50BxM7Z7KDqThnqoOpORfXe+Fgqs7F9W47mLpzcb2bDnbEubjeLQc75pwJDnbUuXYc/CJHvrLgXEw/hQ5WFI5kwjlNv4ZUiA6Kd9zMOKfoONDegeRgNYvORfTz4j9v03aw685J/TwhZEfcywvvc8dwAh0HgN/SebHj5VyVOndO1blTneo4rVflnpaDPXOuuYcD73VUj3OwL6b33Dk+rVUdHfwsR74IIWdjnOy5c5TSH6HQ6ifRwSpjLOpvO+6cykkjnNP0K/isSe5gVecgAMhOHnCu2ZVOdaDvO6foeLdaw3caU7RYLOIbdPB4EAT4TN9955pP8BadPOCc0COd6kA/4FxEP7c/EwDgP7aSCeGBS/bXAAAAAElFTkSuQmCC);
    background-origin: padding-box;
    background-position: left top;
    background-clip: border-box;
    background-repeat: repeat;
    background-attachment: scroll;
    background-size: auto;
}

#window {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    -webkit-box-shadow: 0px 0px 64px 3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.75);
}

.v-toolbar__content {
    height: 45px !important;
}

.shake-animation-active {
    // animation: shake 0.3s;
    animation: shake 5s;
    // animation-iteration-count: 0.3s;
    animation-iteration-count: 5s;
}

@keyframes shake {
    0% {
        transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
        transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
        transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
        transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
        transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
        transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
        transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
        transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
        transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
        transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
        transform: translate(1px, -2px) rotate(-1deg);
    }
}

/* own scrollbar */
/* Note: The -webkit-scrollbar is not supported by Firefox or IE and Edge. */
::-webkit-scrollbar {
    /* width */
    width: 12px;
}
::-webkit-scrollbar-track {
    /* Track */
    box-shadow: inset 0 0 5px grey;
    border-radius: 8px;
}
::-webkit-scrollbar-thumb {
    /* Handle */
    background: rgb(110, 110, 110);
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
    /* Handle on hover */
    background: rgb(110, 110, 110);
}
::-webkit-scrollbar-track-piece {
    /* not handle on */
    background: rgb(1, 1, 1);
}
</style>

