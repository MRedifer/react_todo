import React from 'react'
import {Formik, Form, Field} from 'formik'
import catSchema from '../../Utilities/ValidationSchema'
import axios from 'axios'

export default function CatCreate(props) {

const handleSubmit = (values) => {
    console.log(values)

    if(!props.category){
      const catToCreate = {
        CategoryName: values.CategoryName,
        CategoryDescription: values.CategoryDescription
      }

      axios.post('http://todoapi.michaelredifer.com/api/categories/', catToCreate).then(() => {
        props.setShowCreate(false)
        props.getCategories()
      })
    }
    else{
      const catToEdit ={
        CategoryId: props.category.CategoryId,
        CategoryName: values.CategoryName,
        CategoryDescription: values.CategoryDescription,
        Done: values.Done
      }
        axios.put('http://todoapi.michaelredifer.com/api/categories/', catToEdit).then(() => {
          props.getCategories();
          props.setShowEdit(false);
        })
    }

}

  return (
    <div className='m-2 text-white text-center'>
      <Formik
        initialValues={{
          CategoryName: props.category ? props.category.CategoryName : '',
          CategoryDescription: props.category ? props.category.CategoryDescription : '',
        }}
        validationSchema={catSchema}
        onSubmit={values => handleSubmit(values)}
      >
        {({errors, touched}) => (
          <Form id='catForm' className='row text-center m-auto'>
            <div className='form-group m-1 p-1'>
              <Field name='CategoryName' className='form-control' placeholder='Name' />
              {errors.CategoryName && touched.CategoryName ? 
                <div className='text-danger'>{errors.CategoryName}</div> :
                null
              }
            </div>
            <div className='form-group m-1 p-1'>
              <Field name='CategoryDescription' className='form-control' placeholder='Description' />
              {errors.CategoryDescription && touched.CategoryDescription ? 
                <div className='text-danger'>{errors.CategoryDescription}</div> :
                null
              }
            </div>
            <div className='form-group m-1'>
              <button className='btn btn-success' type='submit'>
                Submit Category to API
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
