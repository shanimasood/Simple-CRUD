<template>
    <br><br>
    <img src="../assets/logo.png" style="width:150px;height: 150px;" alt="">
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
import { ElNotification } from 'element-plus'
export default {
    mounted() {
        let user = this.$store.getters.gettersLogin
        if (user.email!=''||user.name!='') {
            router.push({ name: 'MainMenu' })
        }
    },
    setup() {
        function login() {
            if(this.Login.email!=''&& this.Login.password!=''){
                store.dispatch('LoginUser',this.Login)
            }
            else{
                ElNotification({
                    title: 'Error',
                    message: 'All Field must be Filled',
                    type: 'error',
                })
            }
            
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
