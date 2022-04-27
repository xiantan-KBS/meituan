import { getCity, getHotCity } from "../api/default";
export default {
    namespaced: true,
    state: {
        curCity: "九江",
        hotCity: [],
        allCity: [],
    },
    mutations: {
        setCurCity(state, payload) {
            state.curCity = payload;
        },
        setHotCity(state, payload) {
            state.hotCity = payload;
        },
        setAllCity(state, payload) {
            state.allCity = payload;
        }
    },
    actions: {
        async fetchCity(ctx) {
            if (ctx.state.allCity.length) {
                return;
            }
            const resp = await getCity();
            ctx.commit('setAllCity', resp);
        },
        async fetchHotCity(ctx) {
            if (ctx.state.hotCity.length) {
                return;
            }
            const resp = await getHotCity();
            ctx.commit('setHotCity', resp);
        }
    }
}