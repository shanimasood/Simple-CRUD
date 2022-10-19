<template>
    <Header />
    <h1>Hello {{name}}, Welcome to the Dashboard</h1>
    <br>
    <h2>Total Registered Car:{{count}}</h2>
    <el-table  border :data="tableData" style="width: 100%"
        max-height="300">
        <el-table-column sortable prop="category" label="Car Category" min-width="230" />
        <el-table-column prop="color" label="Color" min-width="180" />
        <el-table-column sortable prop="model" label="Model" min-width="120" />
        <el-table-column prop="make" label="Make" min-width="300" />
        <el-table-column prop="reg_no" label="Registration No" min-width="200" />
        <el-table-column label="Actions" align="center" min-width="300">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
import { ref } from '@vue/reactivity'
import Header from '../components/Header.vue'
import router from '../router/index'
import store from '../store/index'
export default {
    components: {
        Header
    },
    methods: {
        handleDelete(index, row) {
            console.log(index, row)
        },
        handleEdit(index, row) {
            console.log(index, row)
        }
    },
    computed: {
        count() {
            let uniqueNames = [...new Set(store.getters.gettersTableData)];
            let count = uniqueNames.length;
            return count
        },
        tableData() {
            return store.getters.gettersTableData
        }
    },
    setup() {
        return {
            currentRow: null,
            name: ref('')
        }
    },
    mounted() {
        store.dispatch('getTableData')
        let user = this.$store.getters.gettersLogin
        console.log("main menu", user);
        if (user.email == '' || user.name == '') {
            router.push('/signUp')
        } else {
            this.name = user.name
        }
    },
}
</script>