import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import PageNotFound from "./pages/PageNotFound";
import Categories from "./pages/Categories";
import SingleCategory from "./pages/SingleCategory";



const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/posts/:slug",
            name: "single-post",
            component: SinglePost
        },
        {
            path: "/categories",
            name: "categories",
            component: Categories
        },
        {
            path: "/categories/:slug",
            name: "single-category",
            component: SingleCategory
        },
        {
            path: "*",
            name: "page-404",
            component: PageNotFound
        },
    ]
});

export default router