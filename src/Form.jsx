import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';



import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
export default function Form({addNew}){
    const [newtodo,setTodo] = useState("");
    function handleInput(e){
        setTodo(e.target.value);
    }
    function handleClick(e){
        e.preventDefault();
        addNew(newtodo);
        setTodo("");
    }
    return(<>
     <ListItem
  
  secondaryAction={
    <IconButton edge="end" aria-label="add" onClick={handleClick}>
      <AddIcon/>
    </IconButton>
  }
  disablePadding
>
    <form onSubmit={handleClick}>
  <ListItemButton role={undefined} dense>
  <TextField id="filled-basic" label="Add New Todo" variant="filled" value={newtodo} onChange={handleInput}/>
  </ListItemButton>
  </form>
</ListItem>


    </>);

}