import { getHouseCity } from "../api/default";
// getCity().then(r => console.log(r));
export default {
    namespaced: true,
    state: {
        city: [],
    },
    mutations: {
        setData(state, payload) {
            state.city = payload;
        }
    },
    actions: {
        async fetchCity(ctx) {
            if (ctx.state.city.length) {
                return;
            }
            const resp = await getHouseCity();
            ctx.commit('setData', resp);
        }
    }
}