import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const todoSlice = createSlice({
    name:'todoSlice',
    initialState:{
        todoList:[]
    },
    reducers:{
        additem:(state,action) => {
            const itemId = nanoid()
            state.todoList.push({id: itemId, todoitem:action.payload})
        },
        removeitem:(state, action) => {
            state.todoList = state.todoList.filter(item => item.id !== action.payload)
        },
        editItem:(state, action) => {
            const changedItem = action.payload
            state.todoList.map(item => {
                if(item.id === changedItem.id){
                    item.todoitem = changedItem.editValue
                }
            })
        }
    }
})

export const {additem, removeitem, editItem} = todoSlice.actions;

export const selectTodoSlice = (state) => state.todoSlice.todoList;

export default todoSlice.reducer;