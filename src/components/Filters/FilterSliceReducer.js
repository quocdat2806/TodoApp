import { createSlice } from "@reduxjs/toolkit"
export const filterSlice = createSlice({
    name:'filters',
    initialState:{
        search:'',
        status:'All',
        priorities:[],
},
    reducers:{
        statusFilterChange(state,action){
             state.status = action.payload 
        },
        searchTextFilter(state,action){
             state.search = action.payload

        },
        prioritiesFilterChange(state,action){
            state.priorities = action.payload
            
        }
    }
    
})


