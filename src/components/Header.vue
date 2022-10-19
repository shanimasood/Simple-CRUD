<template>
    <div class="nav">
        <a @click="home">Home</a>
        <a @click="add">Add Cars</a>
        <a @click="logout" style="float:right">Logout</a>
    </div>
</template>
<script>
import router from '../router/index'
import store from '../store/index'
export default {
    setup() {
       async function logout() {
          await  store.dispatch('logout',this.clear)
            router.push('/login')
        }
        function add(){
            router.push('/add')
        }
        function home(){
            // store.dispatch('getTableData')
            router.push('/')
        }
        return {
            logout,
            add,
            home,
            clear:{
                name:'',
                email:'',
                password:''
            }
        }
    }
}
</script>
<style>
.nav {
    background:url(../assets/header.jpg);
    overflow: hidden;
}

.nav a {
    float: left;
    color: #f2f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-style: 17px;
    text-decoration: none;
    margin-right: 5px;
    cursor: pointer;
}

.nav a:hover {
    background: #ddd;
    color: #333;
}

.el-header {
    padding: var(--el-header-padding);
    --el-header-padding: 0;
}

.el-main {
    --el-main-padding: 0;
    padding: var(--el-main-padding);
}
</style>