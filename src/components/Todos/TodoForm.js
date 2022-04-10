import React, {useState, useEffect} from 'react'
import {Formik, Form, Field} from 'formik'
import {todoSchema} from '../../Utilities/ValidationSchema'
import axios from 'axios'

export default function TodoForm(props) {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        axios.get('http://localhost:62103/api/categories/').then(response => { setCategories(response.data)})
    }
    const handleSubmit = (values) => {
        console.log(values)
        if(!props.todo){
            const todoToCreate = {
                Action: values.Action,
                Description: values.Description,
                Done: false,
                CategoryId: values.CategoryId
            }

            axios.post('http://localhost:62103/api/todo/', todoToCreate).then(() => {
                props.getTodos();
                props.setShowCreate(false);
            })
        }
        else{
            //console.log('edit mode')
            const todoToEdit = {
                ToDoId: props.todo.ToDoId,
                Action: values.Action,
                Description: values.Description,
                CategoryId: values.CategoryId
            }
            console.log(todoToEdit)
            axios.put('http://localhost:62103/api/todo/', todoToEdit).then(() => {
                props.getTodos()
                props.setShowEdit(false)
            })
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

  return (
    <Formik
        initialValues={{
            Action: props.todo ? props.todo.Action : '',
            Description : props.todo ? props.todo.Description : '',
            CategoryId: props.todo ? props.todo.CategoryId : ''
        }}
        validationSchema={todoSchema}
        onSubmit={(values) => handleSubmit(values)}
    >
        {({ errors, touched }) => (
            <Form id=''>
                <div className='form-group m-3'>
                    <Field name='Action' className='form-control' placeholder='Action' />
                    {errors.Action && touched.Action ? (
                        <div className='text-danger'>{errors.Action}</div>
                    ) : null}
                    <Field name='Description' as='textarea' className='form-control' 
                    placeholder='Description' style={{resize: 'none', height: '5em'}} />
                    {errors.Action && touched.Action ? (
                        <div className='text-danger'>{errors.Description}</div>
                    ) : null}
                    <div>
                        <Field as='select' name='CategoryId' className='form-control'>
                            <option value='' disabled>[--Please Choose--]</option>
                            {categories.map(cat =>
                                <option key={cat.CategoryId} value={cat.CategoryId}>
                                    {cat.CategoryName}
                                </option> 
                            )}
                        </Field>
                    </div>
                    <div className='form-group m-3'>
                        <button type='submit' className='btn btn-info m-3'>Submit Resource to API</button>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
  )
}
