import { defineStore } from 'pinia'
// import axios from 'axios'

export const useExportTask = defineStore('exportTask',{
    state: () => ({
        name: 'Rogineeee',
        entries:[],
        
        
    }),
    setup(){
        
    },
    actions:{

    },
    getters:{
        getUsers(state){
            return state.entries
        }
    }
    
})