export const state = () => ({
    subject: "",
    showMenu: false,
})

export const mutations = {
    setSubject(state, payload) {
        try {
            state.subject = payload
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
    getSubject(state) {
        return state.subject
    },
    geStatusShowMenu(state) {
        return state.showMenu
    }
}