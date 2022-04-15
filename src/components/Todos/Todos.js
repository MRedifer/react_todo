import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import SingleTodo from './SingleTodo';
import {useAuth} from '../../contexts/AuthContext'
import TodoCreate from './TodoCreate';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const {currentUser} = useAuth()

  //My local port: http://localhost:62103/api/todo
  const getTodos = () => {

    axios.get('http://todoapi.michaelredifer.com/api/todo/').then(response => {
      console.log(response)
      setTodos(response.data)
    })
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <section className=''>
        <article className='bg-danger p-5'>
            <h1 className='text-center'>Todos Dashboard</h1>
        </article>
        {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
          <div className='bg-dark p-2 mb-3 text-center'>
            <button className='btn btn-danger' onClick={() => setShowCreate(!showCreate)}>
              {!showCreate ? 'Create New ToDo' : 'Close Form'}
            </button>
            <div className='createContainer'>
              {showCreate && <TodoCreate 
              getTodos={getTodos}
              setShowCreate={setShowCreate} />}
            </div>
          </div>
        }
        <Container>
          <article className='bg-dark p-3'>

          </article>
          <article className='row justify-content-center bg-danger'>
          {todos.map(x =>
            <SingleTodo 
            key={x.ToDoId}
            todo={x} 
            getTodos = {getTodos}/>
          )}
          </article>
          <article className='bg-dark p-3'>

          </article>
        </Container>

    </section>
    
  )
}