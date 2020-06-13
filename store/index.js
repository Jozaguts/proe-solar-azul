export const state = () => ({
    asunto: ""
})

export const mutations = {
    setAsunto(state, payload) {
        state.asunto = payload
    }
}
export const getters = {
    getAsunto(state) {
        return state.asunto
    }
}