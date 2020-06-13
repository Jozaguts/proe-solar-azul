export const state = () => ({
    asunto: ""
})

export const mutations = {
    setAsunto(state, payload) {
        try {
            state.asunto = payload
        } catch (error) {
            console.error(error)
        } finally {
            this.$router.push('/cotizar')
        }
    }
}
export const getters = {
    getAsunto(state) {
        return state.asunto
    }
}