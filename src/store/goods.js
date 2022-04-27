import { getLikes, getProducts } from "@/api/default";
export default {
    namespaced: true,
    state: {
        likes: [],
        products: [],
    },
    mutations: {
        setLikes(state, payload) {
            state.likes = payload;
        },
        setProducts(state, payload) {
            state.products = payload;
        }
    },
    actions: {
        async fetchLikes(ctx) {
            if (ctx.state.likes.length) {
                return;
            }
            const resp = await getLikes();
            ctx.commit('setLikes', resp);
        },
        async fetchProducts(ctx) {
            if (ctx.state.products.length) {
                return;
            }
            const resp = await getProducts();
            ctx.commit('setProducts', resp);
        }
    },
}