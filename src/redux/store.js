
import { filterSlice } from "../components/Filters/FilterSliceReducer";
import { todoSlice } from "../components/TodoList/TodoSliceReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        filters:filterSlice.reducer,
        todoList:todoSlice.reducer

    }

})



