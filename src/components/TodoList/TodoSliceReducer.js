import { createSlice } from "@reduxjs/toolkit";
  
    export const todoSlice = createSlice({
        name:'todoList',
        initialState: [
            {
                id:1,name:'Learn Yoga' , completed:true,priority:'Medium',
    
            },
            {
                id:2,name:'Learn Database' , completed:false,priority:'High',
    
            },
            {
                id:3,name:'Learn Football' , completed:false,priority:'Low',
    
            },
        ],
        reducers:{
            addTodo(state,action){
                 state.push(action.payload)    
            },
            toggleTodo(state,action){
                const currentTodo = state.find((todo)=>todo.id === action.payload)
                currentTodo.completed = !currentTodo.completed

            }


        },
    })

