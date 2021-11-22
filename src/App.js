import React , {useReducer} from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { ToDoContext } from './context/ToDoContext';

import Todoreducer from './context/Reducer';
import TodoForm from './components/ToDoForm';
import Todos from './components/Todos';


const App = () => {

  const [todos , dispatch] =  useReducer(Todoreducer, [])
  return (
   <ToDoContext.Provider value={{todos , dispatch }}>
     <Container fluid>
       <h1 style={{marginBottom:"20px"}}>TODO Application</h1><br/>
       <Todos/>
       <TodoForm/>
       
     </Container>
   </ToDoContext.Provider>
  );
}
export default App;
