<template>
    <Header />
    <h1>Hello {{name}}, Welcome to the Dashboard</h1>
    <br>
    <h2>Total Registered Car:{{count}}</h2>
    <el-table border :data="tableData" style="width: 100%" max-height="300">
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
    <!-- ////////////////////////////////////// -->
    <el-dialog v-model="dialogFormVisible" title="Update Cars">
        <div class="addCar">
            <select placeholder="Select Category" v-model="car.category" name="car-category" id="cars">
                <option value="bus">Bus</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="hatchback">Hatchback</option>
            </select>
            <input type="text" v-model="car.color" placeholder="Enter Color">
            <input type="text" v-model="car.model" placeholder="Enter Model">
            <input type="text" v-model="car.make" placeholder="Enter Make">
            <input type="text" v-model="car.reg_no" placeholder="Enter Registration Number">
            <button @click="update">Update</button>
        </div>
    </el-dialog>
</template>
<script>
import { ref } from '@vue/reactivity'
import Header from '../components/Header.vue'
import router from '../router/index'
import store from '../store/index'
import { ElNotification } from 'element-plus'
export default {
    components: {
        Header
    },
    methods: {
        handleDelete(index, row) {
            console.log(index, row.id)
            this.$store.dispatch('deleteTableRow', row.id)
        },
        handleEdit(index, row) {
            console.log(index, row)
            this.dialogFormVisible = true
            this.car.category=row.category
            this.car.color=row.color
            this.car.make=row.make
            this.car.model=row.model
            this.car.reg_no=row.reg_no
            this.car.id=row.id
        },
       async update(){
        if (this.car.category != '' && this.car.color != '' && this.car.model != '' && this.car.make != '' && this.car.reg_no != '') {
            await this.$store.dispatch('UpdateRow',this.car)
            this.dialogFormVisible = false
            } else {
                ElNotification({
                    title: 'Error',
                    message: 'All Field must be Filled',
                    type: 'error',
                })
            }
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
            dialogFormVisible: ref(false),
            car: {
                category: '',
                color: '',
                model: '',
                make: '',
                reg_no: '',
                id:''
            },
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