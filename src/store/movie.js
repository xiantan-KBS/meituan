import { getMovie } from "@/api/default";
export default {
    namespaced: true,
    state: {
        data: [],
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchMovie(ctx) {
            if (ctx.state.data.length) {
                return;
            }
            const resp = await getMovie();
            ctx.commit('setData', resp);
        }
    }
}