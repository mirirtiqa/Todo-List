import './App.css';
import  CssBaseline  from '@mui/material/CssBaseline';
import TodoList from './TodoList';
import Form from './Form';

function App() {
  return (
   <>
   <CssBaseline/>
   <h1>ToDos</h1>
   <TodoList/>
   
   </>
  );
}

export default App;
