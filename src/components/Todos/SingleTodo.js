import React from 'react'

export default function SingleTodo(props) {
  return (
    <div className='col-md-5 m-4'>
              <h3>{props.todo.Action}</h3>
              {props.todo.Description !== null ? 
                <p>{props.todo.Description}</p> :
                <p>No Description Provided</p>
              }
            </div>
  )
}