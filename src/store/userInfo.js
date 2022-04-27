export default {
    namespaced: true,
    state: {
        useName: '',
        password: '',
        nickname: '',
    },
    mutations: {
        setUseName(state, payload) {
            state.useName = payload;
        },
        setPassword(state, payload) {
            state.password = payload;
        },
        setNickname(state, payload) {
            state.nickname = payload;
        },
    }
}