
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function Form({addNew}){
    const [newtodo,setTodo] = useState("");
    function handleInput(e){
        setTodo(e.target.value);
    }
    function handleClick(){
        addNew(newtodo);
        setTodo("");
    }
    return(<>
    <TextField id="outlined-basic" label="Add New Todo" variant="outlined" value={newtodo} onChange={handleInput}/>
    <br/>
    <Button variant="contained" onClick={handleClick}>Add</Button>


    </>);

}