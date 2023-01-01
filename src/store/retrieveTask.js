import { defineStore } from 'pinia'
import axios from 'axios'

export const usePatTask = defineStore('patTask',{
    state: () => ({
        entries:[],
        enccode:'',
        header:[],
        form1:{}
    }),
    setup(){
        
    },
    actions:{
        
    },
    getters:{
        getUsers(state){
            return state.entries
        },
        async getRetrieveInjuryDataJson(){
            const enccode1 = {
                enccode1:this.enccode}
            const response = await axios.post("http://192.168.7.66:8040/api/retrieveInjuryDataJSON",enccode1)
            return response.data
        },
        async getPatHeader(){
            const enccode1 = {
                enccode1:this.enccode}
            const response = await axios.post("http://192.168.7.66:8040/api/injuryHeader",enccode1)
            this.header = response.data
            return response.data
        }
    }
    
})