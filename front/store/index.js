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
        this.$axios.setHeader('Authorization', 'Bearer '+authtoken)
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
                    commit('setLoginStatus',true);
                    commit('setAuthToken',logindetail.data.token);
                    var user = await this.$axios.get('me').then(e=>e.data)
                    commit('setloggedInUser',user);
                    if(user.permissions.length>0){
                        let permissions = user.permissions.map((e)=>{
                            return e.permission_id
                        })
                        commit('setPermissions',permissions);
                    }
                    this.$router.push('/customer');
                } else {
                    // this.erorrs.email = logindetail.data;
                }
            }
        })
        commit('tglLoginloader')
    },
    async checkLogin({commit}){
        var token = localStorage.getItem('auth_token')?localStorage.getItem('auth_token'):'';
        if(token!=''){
            commit('setLoginStatus',true);
            commit('setAuthToken',token);
            var user = await this.$axios.get('me').then(e=>e.data)
            commit('setloggedInUser',user);
            if(user.permissions.length>0){
                let permissions = user.permissions.map((e)=>{
                    return e.permission_id
                })
                commit('setPermissions',permissions);
            }
        }
    },
}