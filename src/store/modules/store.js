import axios from 'axios'
import { reactive } from 'vue'
import router from '../../router/index'
import { ElNotification } from 'element-plus'
const state ={
    register:{
        name:'',
        email:'',
        password:''
    },
    login:{
        email:'',
        password:'',
        name:''
    },
    carList:[],
    tableDataList:[]
}
const getters =reactive({
    gettersRegister : (state)=> state.register,
    gettersLogin : (state)=> state.login,
    gettersTableData : (state)=> state.tableDataList,
})
const actions ={
    async RegisterUser({commit},val){
        commit('setUserData',val)
        let email = state.register.email
        let password = state.register.password
        let name = state.register.name
        let response = await axios.post('http://localhost:3000/users', {
            email: email,
            name: name,
            password: password
        });
        if (response.status == 201 || response.status == 200) {
            console.log(response.data);
            commit('user_info', response.data)
            router.push({ name: 'MainMenu' })
        }
    },
    async LoginUser({commit},val){
        commit('setLoginData',val)
        let email = state.login.email
        let password = state.login.password
        let response = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`);
            if ((response.status == 201 || response.status == 200) && response.data.length > 0) {
                console.log(response.data);
                commit('userLogin_info', response.data[0])
                router.push({ name: 'MainMenu' })
            }
            else{
                ElNotification({
                    title: 'Error',
                    message: 'Invalid Login Credentials',
                    type: 'error',
                  })
            }
    },
    async AddCar({commit},val){
        commit('setAddCar',val)
        let response = await axios.post('http://localhost:3000/carList', {
            category: val.category,
            color: val.color,
            model: val.model,
            make:val.make,
            reg_no:val.reg_no,
        });
        console.log(response.data);
    },
    async getTableData({commit}){
        let response = await axios.get('http://localhost:3000/carList');
        console.log("data table",response.data)
        commit('setTableData',response.data)
    },
    async deleteTableRow({dispatch},val){
        await axios.delete(`http://localhost:3000/carList/${val}`);
        await dispatch('getTableData')
    },
    async UpdateRow({dispatch},val){
        console.log("put request",val);
        await axios.put(`http://localhost:3000/carList/${val.id}`,{
            category: val.category,
            color: val.color,
            model: val.model,
            make:val.make,
            reg_no:val.reg_no,
        });
        await dispatch('getTableData')
    },
    logout({commit},val){
        commit('userLogin_info', val)
    }
}
const mutations ={
    setUserData(state,val){
        state.register.name=val.name
        state.register.email=val.email
        state.register.password=val.password
    },
    setLoginData(state,val){
        state.login.email=val.email
        state.login.password = val.password
    },
    setAddCar(state,val){
        state.carList=val
    },
    user_info(state,data){
        state.register.name=data.name
        state.register.email=data.email
        state.register.password=data.password
    },
    userLogin_info(state,val){
        state.login.email=val.email
        state.login.password = val.password
        state.login.name = val.name
    },
    setTableData(state,data){
        data = data.map((val) => {
            return {
                category: val.category,
                color: val.color,
                model: val.model,
                make: val.make,
                reg_no: val.reg_no,
                id:val.id
            }
        })
        state.tableDataList=data
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}