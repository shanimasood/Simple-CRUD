<template>
     <Header/>
     <br>
   <h1>Update Cars</h1>
   <br>
   <div class="addCar">
    <select v-model="category" name="car-category" id="cars">
        <option value="bus">Bus</option>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
        <option value="hatchback">Hatchback</option>
    </select>
    <input type="text" placeholder="Enter Color">
    <input type="text" placeholder="Enter Model">
    <input type="text" placeholder="Enter Make">
    <input type="text" placeholder="Enter Registration Number">
    <button>Update</button>
   </div>
</template>
<script>
import Header from '../components/Header.vue'
import router from '../router/index'
export default {
   components:{
       Header
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