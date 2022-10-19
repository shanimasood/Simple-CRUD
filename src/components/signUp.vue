<template>
     <br>
    <img src="../assets/logo.png" style="width:150px;height: 150px;" alt="">
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
import { ElNotification } from 'element-plus'
export default {
    mounted() {
        let user = this.$store.getters.gettersLogin
        if (user.email!=''||user.name!='') {
            router.push({ name: 'MainMenu' })
        }
    },
    setup() {
        function signUp() {
            if(this.register.name!=''&& this.register.email!=''&& this.register.password!=''){
                store.dispatch('RegisterUser',this.register)
            }else{
                ElNotification({
                    title: 'Error',
                    message: 'All Field must be Filled',
                    type: 'error',
                })
            }
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