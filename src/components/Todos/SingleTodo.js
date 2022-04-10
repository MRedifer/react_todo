import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {useAuth} from '../../contexts/AuthContext'
import axios from 'axios'
import TodoEdit from './TodoEdit'



library.add(fas)

export default function SingleTodo(props) {
  const {currentUser} = useAuth()
  const [showEdit, setShowEdit] = useState(false);

  const deleteTodo = (id) => {
    if(window.confirm(`Are you sure you want to delete ${props.todo.Action}?`)){
      axios.delete(`http://localhost:62103/api/todo/${id}`).then(() => {props.getTodos()})
    }
  }
  return (
    <div className='col-md-5 m-4'>
      {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
        <div>
          <button id='editLink' onClick={() => setShowEdit(true)}>
            <FontAwesomeIcon icon={['fas', 'edit']} />
          </button>
          <button id='deleteLink' onClick={() => deleteTodo(props.todo.ToDoId)}>
            <FontAwesomeIcon icon={['fas', 'trash-alt']} />
          </button>
          {showEdit && 
            <TodoEdit
              todo={props.todo}
              showEdit={showEdit}
              setShowEdit={setShowEdit}
              getTodos={props.getTodos} />
        }
        </div>
}
              <h3>{props.todo.Action}</h3>
              {props.todo.Description !== null ? 
                <p>{props.todo.Description}</p> :
                <p>No Description Provided</p>
              }
            </div>
    
  )
}