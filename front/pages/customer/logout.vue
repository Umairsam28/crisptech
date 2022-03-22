<template>
    
</template>
<script>
export default {
    mounted(){
        localStorage.clear()
        this.$store.commit("setLoginStatus", false);
        this.$store.commit("setAuthToken", "");
        this.$store.commit("setloggedInUser", {});
        this.$router.push('/login');
    }
}
</script>