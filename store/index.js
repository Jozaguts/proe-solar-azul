export const state = () => ({
    asunto: "",
    showMenu: false,
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
    },
    toggleMenu(state) {
        try {
            state.showMenu = !state.showMenu
        } catch (error) {
            console.error(error)
        }
    }
}
export const getters = {
    getAsunto(state) {
        return state.asunto
    },
    geStatusShowMenu(state) {
        return state.showMenu
    }
}