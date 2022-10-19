<template>
    <br><br><br><br><br><br><br><br>
    <h1>Login</h1>
    <div class="login">
        <input type="email" v-model="Login.email" placeholder="Enter Email" />
        <input type="password" v-model="Login.password" placeholder="Enter Password" />
        <button @click="login">Login</button>
        <p>
            <router-link to="/signUp">Sign Up</router-link>
        </p>
    </div>
</template>
<script>
import store from '../store/index'
import router from '../router/index'
export default {
    mounted() {
        let user = this.$store.getters.gettersLogin
        if (user.email!=''||user.name!='') {
            router.push({ name: 'MainMenu' })
        }
    },
    setup() {
        function login() {
            store.dispatch('LoginUser',this.Login)
        }
        return {
            Login: {
                email: '',
                password: '',
            },
            login
        }
    }
}
</script>
