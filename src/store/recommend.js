import { getRecommend } from "@/api/default";

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
        async fetchRecommend(ctx) {
            if (ctx.state.data.length) {
                return;
            }
            const resp = await getRecommend();
            ctx.commit('setData', resp);
        }
    }
}