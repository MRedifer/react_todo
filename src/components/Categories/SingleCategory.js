import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {useAuth} from '../../contexts/AuthContext'
import axios from 'axios'
import CatEdit from './CatEdit'

library.add(fas);

export default function SingleCategory(props){
  const {currentUser} = useAuth()
  const [showEdit, setShowEdit] = useState(false);

  const deleteCategory = (id) => {
    console.log(id)

    if(window.confirm(`Are you sure you want to delete ${props.category.CategoryName}?`)){
    axios.delete(`http://localhost:62103/api/categories/${id}`).then(() => {
      props.getCategories()
    })
  }
  }
    return (
      <tr>
          <td>{props.category.CategoryName}</td>
          <td>{props.category.CategoryDescription}</td>
          {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN && 
            <td>
              <button className='m-1 rounded' id='editLink' onClick={() => setShowEdit(true)}>
                <FontAwesomeIcon icon={['fas', 'edit']}  />
              </button>
              <button className='m-1 rounded' id='deleteLink' onClick={() => deleteCategory(props.category.CategoryId)}>
                <FontAwesomeIcon icon='fa-solid fa-trash' />
              </button>
              {showEdit &&
                <CatEdit
                  category={props.category}
                  setShowEdit={setShowEdit}
                  showEdit={showEdit}
                  getCategories={props.getCategories} />
              }
            </td>
          }
      </tr>
    )
  }
