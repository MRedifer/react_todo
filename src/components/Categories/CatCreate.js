import React from 'react'
import CatForm from './CatForm'

export default function CatCreate(props) {
  return (
    <div className='createCategory m-2 text-center'>
        <CatForm
         getCategories={props.getCategoires}
         setShowCreate={props.setShowCreate} />
    </div>
  )
}
