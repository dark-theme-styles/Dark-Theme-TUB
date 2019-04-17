import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: "https://dark-theme-styles.github.io/Dark-Theme-TUB/",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/preview",
            name: "preview",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ "./views/Preview.vue")
        },
        {
            path: "/todo",
            name: "todo",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ "./views/Todo.vue")
        }
    ]
});
