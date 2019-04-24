import Vue from "vue";
import Vuetify from "vuetify";
import VueHighlightJS from "vue-highlightjs";
import App from "./App.vue";
import router from "./router";
// index.js or main.js
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

Vue.config.productionTip = false;

Vue.use(Vuetify, {
    theme: {
        primary: "#1e1e1e",
        secondary: "#f5f5f5",
        accent: "#2d2d2d",
        error: "#ff3c4e",
        info: "#c8c8c8",
        success: "#39b54a",
        warning: "#319ae3"
    }
});

Vue.use(VueHighlightJS);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
