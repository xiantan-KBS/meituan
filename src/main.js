import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./bus";
import "./styles/global.scss";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')