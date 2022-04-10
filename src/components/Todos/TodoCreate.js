import React from 'react'
import TodoForm from './TodoForm'

export default function TodoCreate(props) {
  return (
    <article className='m-2 text-white justify-content-center'>
        <TodoForm
            setShowCreate={props.setShowCreate}
            getTodos={props.getTodos}  />
    </article>
  )
}