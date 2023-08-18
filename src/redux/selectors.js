
import { createSelector } from "reselect"


export const todoListSelector = (state)=>{
    return state.todoList
}
export const searchTextSelector = (state)=>{

   return state.filters.search
}
export const statusFilterChange = (state)=>{

    return state.filters.status
 }
 export const prioritiesFilterChange = (state)=>{

    return state.filters.priorities
 }
export const todoRemaning = createSelector(todoListSelector
    ,searchTextSelector,statusFilterChange,prioritiesFilterChange
    ,(todoList,searchText,status,priorities)=>{
    return todoList.filter((todo)=>{
        if(status === 'All'){
            return priorities.length? todo.name.includes(searchText)  && priorities.includes(todo.priority)
             :todo.name.includes(searchText)
            
        }
        return   todo.name.includes(searchText) 
        && ( status === 'Completed'? todo.completed : !todo.completed )
        && (priorities.length ?   priorities.includes(todo.priority)  :true)


    })

})