import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem({todo,removetodo,toggle}){

    
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
    <ListItem
  
    secondaryAction={
      <IconButton edge="end" aria-label="delete" onClick={removetodo}>
        <DeleteIcon/>
      </IconButton>
    }
    disablePadding
  >
    <ListItemButton role={undefined} onClick={toggle} dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.completed}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={`${todo.text}`} />
    </ListItemButton>
  </ListItem>
        
    )

}