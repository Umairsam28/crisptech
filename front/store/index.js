export const state = () => ({
    authtoken: '',
    loggedIn: false,
    loggedInUser: {},
    permissions: [],
    loader: false,
})

export const mutations = {
    setAuthToken(state, authtoken) {
        localStorage.setItem('auth_token',authtoken);
        window.axios.defaults.headers.common['Authorization'] = 'Bearer '+authtoken;
        state.authtoken = authtoken
    },
    setLoginStatus(state, loggedIn) {
        state.loggedIn = loggedIn
    },
    setloggedInUser(state, loggedInUser){
        localStorage.setItem('logged_in_role_id',loggedInUser.role_id);
        state.loggedInUser = loggedInUser
    },
    setPermissions(state, permissions){
        state.permissions = permissions
    },
    tglLoginloader(state){
        state.loader = !state.loader
    }
}
export const actions = {
    async tryLogin({ commit }, { email, password }) {
        commit('tglLoginloader')
        let res = await this.$axios.post('login', {
            email: email,
            password: password,
        }).then(async(logindetail)=>{
            if (logindetail.data) {
                if (logindetail.status) {
                    this.$store.commit('setLoginStatus',true);
                    this.$store.commit('setAuthToken',logindetail.data);
                    var user = await this.$axios.get('me')
                    this.$store.commit('setloggedInUser',user);
                    if(user.permissions.length>0){
                    let permissions = user.permissions.map((e)=>{
                        return e.permission_id
                    })
                    this.$store.commit('setPermissions',permissions);
                    }
                } else {
                    // this.erorrs.email = logindetail.data;
                }
            }
        })
        commit('tglLoginloader')
    }
}