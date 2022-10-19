<template>
    <br><br><br><br><br><br><br>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="register.name" placeholder="Enter Name" />
        <input type="email" v-model="register.email" placeholder="Enter Email" />
        <input type="password" v-model="register.password" placeholder="Enter Password" />
        <button @click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>
<script>
import router from '../router/index'
import store from '../store/index'
export default {
    mounted() {
        let user = this.$store.getters.gettersLogin
        if (user.email!=''||user.name!='') {
            router.push({ name: 'MainMenu' })
        }
    },
    setup() {
        function signUp() {
           store.dispatch('RegisterUser',this.register)
        }
        return {
            register: {
                name: '',
                email: '',
                password: '',
            },
            signUp,
        }
    }
}
</script>