import { useDispatch, useSelector } from "react-redux";
import { additem, removeitem, editItem, selectTodoSlice } from "../reduxSlice/todoSlice";
import { useEffect, useState } from "react";
import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


export function TodoList(){
    const [inputText, setInputText] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editItemValue, setEditItemValue] = useState(null);
    const [editValue, setEditValue] = useState("")
    const todo = useSelector(selectTodoSlice);
    const dispatch = useDispatch();
    const handleAdd = (event) => {
        event.preventDefault()
        dispatch(additem(inputText))
        setInputText("");
    }
    const handleRemove = (id) => {
        dispatch(removeitem(id))
    }
    const handleEdit = (item) => {
        setIsEditing(true)
        setEditItemValue(item)
        setEditValue(item.todoitem)
    }
    const handleChangeText = (event) => {
        event.preventDefault();
        setEditValue(event.target.value)
    }
    const handleDoneChange = (id) => {
        dispatch(editItem({id, editValue}))
        setIsEditing(false)
        setEditItemValue(null)
    }
    const handleDiscard = (id) => {
        setEditItemValue(null)
        setIsEditing(false)
    }

    return(
        <div>
            <Box sx={{margin: "1% 5% 1% 5%", display:"flex", justifyContent:"space-between", maxHeight:"px"}}>
                <TextField id="filled-basic" sx={{width:"80%"}} label="Add item" variant="filled" value = {inputText} onChange={(e) => setInputText(e.target.value)} />
                <Button variant="contained" sx={{width:"15%"}} type="submit" onClick={handleAdd}>Add</Button>
            </Box>
            <div>
                {todo.map((item, index) => (
                    <Box key={index} sx={{margin: "1% 5% 1% 5%", backgroundColor:"lightgray" }}>
                        <Card>
                            <CardContent sx={{display:"flex", justifyContent:"space-between", maxHeight:"px"}}>
                                {isEditing && editItemValue.id === item.id ? 
                                    <div>
                                        <TextField id="filled-basic" value={editValue} onChange={handleChangeText} label="Edit item" variant="filled" /> 
                                        <button type="button" onClick={() => handleDiscard(item.id)}><CloseIcon /></button>
                                        <button type="button" onClick={() => handleDoneChange(item.id)}><DoneIcon /></button>
                                    </div>
                                : <Typography>{item.todoitem}</Typography>
                                }
                                <div>
                                    <button type="button" onClick={() => handleEdit(item)}><EditIcon /></button>
                                    <button type="button" onClick={() => handleRemove(item.id)}><DeleteIcon /></button>
                                </div>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </div>

        </div>
    )
}
