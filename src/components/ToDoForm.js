import React, {useState, useContext} from 'react';
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

import { v4 } from 'uuid';
import { ToDoContext } from '../context/ToDoContext';
import { ADD_TODO } from '../context/Action.Types';

const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const { dispatch} = useContext(ToDoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if(todoString === ''){
           return alert("Please enter a todo")
        }

        const todo = {
            todoString,
            id: v4() 
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("");
    }
   return(
       <Form onSubmit={handleSubmit} style={{marginBottom:"-250px", border: "3px solid", textAlign:'left'}}>
           <FormGroup>
             <InputGroup>
               <Input type="text" name="todo" id="todo" placeholder="Your Next Todo"
                value={todoString}
                onChange={e => setTodoString(e.target.value)}
               />
               <InputGroupAddon addonType="prepend">
                   <Button color="warning"
                   //ToDo:- onClick
                   >
                    ADD
                   </Button>
               </InputGroupAddon>
               </InputGroup>
           </FormGroup>
       </Form>
   )
}

export default TodoForm;