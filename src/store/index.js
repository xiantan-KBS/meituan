import { Store, install } from "vuex";
import Vue from "vue";
import movie from './movie';
import houseCity from "./houseCity";
import recommend from "./recommend";
import aboutCity from "./aboutCity";
import userInfo from "./userInfo";
import goods from "./goods";
if (!window.Vuex) {
    install(Vue);
}

const store = new Store({
    modules: {
        movie,
        houseCity,
        recommend,
        aboutCity,
        userInfo,
        goods,
    },
    strict: true,
});
export default store;