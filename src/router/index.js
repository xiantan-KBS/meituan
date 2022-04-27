import VueRouter from "vue-router";
import Vue from "vue";
// import Layout from "@/layout/index.vue";
// import Login from "@/views/Login/index.vue";
// import Register from "@/views/Register/index.vue";
// import Main from "@/views/Main/index.vue";
// import ChangeCity from "@/views/ChangeCity/index.vue";
// import Goods from "@/views/Goods/index.vue";
// import Detail from "@/views/Detail/index.vue";
// import Settings from "@/views/Settings/index.vue";

if (!window.VueRouter) {
    Vue.use(VueRouter);
}

const routes = [{
        path: "/",
        name: "layout",
        component: () =>
            import ("@/layout/index.vue"),
        redirect: '/default',
        children: [{
                path: "/default",
                name: "main",
                component: () =>
                    import ("@/views/Main/index.vue"),
            },
            {
                path: "/changeCity",
                name: "changeCity",
                component: () =>
                    import ("@/views/ChangeCity/index.vue"),
            },
            {
                path: "/s/:a",
                name: "goods",
                component: () =>
                    import ("@/views/Goods/index.vue"),
            },
            {
                path: "/detail",
                name: "detail",
                component: () =>
                    import ("@/views/Detail/index.vue"),
            },
            {
                path: "/settings",
                name: "settings",
                component: () =>
                    import ("@/views/Settings/index.vue"),
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ('@/views/Login/index.vue'),
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ('@/views/Register/index.vue'),
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
    base: '/meituan',
});
export default router;