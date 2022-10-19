<template>
    <Header />
    <br>
    <h1>Add Cars</h1>
    <br>
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
        <button @click="add">Add</button>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import router from '../router/index'
import store from '../store/index'
import { ElNotification } from 'element-plus'
export default {
    components: {
        Header
    },
    setup() {
        async function add() {
            if (this.car.category != '' && this.car.color != '' && this.car.model != '' && this.car.make != '' && this.car.reg_no != '') {
                await store.dispatch('AddCar', this.car)
                router.push('/')
            } else {
                ElNotification({
                    title: 'Error',
                    message: 'All Field must be Filled',
                    type: 'error',
                })
            }
        }
        return {
            add,
            car: {
                category: '',
                color: '',
                model: '',
                make: '',
                reg_no: ''
            }
        }
    },
    mounted() {
        let user = this.$store.getters.gettersLogin
        console.log("main menu", user);
        if (user.email == '' || user.name == '') {
            router.push('/signUp')
        }
    },
}
</script>