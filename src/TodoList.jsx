
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { useState,useEffect } from 'react';
import TodoItem from './TodoItem';
import Form from './Form';


const inTodos = [
    {id:1,text:"read catcher",completed: true},
    {id:2,text:"read catcher",completed: false},
    {id:3,text:"read catcher",completed: true},
    {id:4,text:"read catcher",completed: false},
];

export default function TodoList(){

    function getInitialData(){
       const data = JSON.parse(localStorage.getItem("todos"));
       if (!data) return [];
       return data;
    }
    const [todoList, setTodoList] = useState(getInitialData);

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todoList));
    },[todoList]);

   function toggleTodo(ind){
        setTodoList((prevTodos) =>{
            return (
                prevTodos.map((todo)=>{
                    if(todo.id==ind){
                        return {...todo,completed:!todo.completed};
                    }
                    else
                        return {...todo};
                })
            );


        }


        );
    }


    const handleDelete = (ind) => {
       setTodoList((prevTodos) => {
            return prevTodos.filter((t) => t.id != ind);
        });
    };

    function addNew(newText){
       return setTodoList((oldTodoList)=>{
            return [...oldTodoList,{id:oldTodoList.length +1,text:newText,completed:false}];
        });
    }



    return(
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todoList.map((todo) => (
         <TodoItem todo = {todo} key={todo.id} 
         removetodo={() => handleDelete(todo.id)}
         toggle ={()=> toggleTodo(todo.id)}
         />
      ))}
      <Form addNew={addNew}/>
    </List>
    
      </>
    );
}