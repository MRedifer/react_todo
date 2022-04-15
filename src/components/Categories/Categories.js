import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import SingleCategory from './SingleCategory';
import { useAuth } from '../../contexts/AuthContext';
import CatCreate from './CatForm';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    const {currentUser} = useAuth()
    const [showCreate, setShowCreate] = useState(false);

    const getCategories = () => {
        axios.get('http://todoapi.michaelredifer.com/api/categories/').then(response => {
            setCategories(response.data)
        })
    }


    useEffect(() => {
        getCategories()
    }, []);
  return (
    <section className=''>
        <article className='bg-danger p-5'>
            <h1 className='text-center'>Categories Dashboard</h1>
        </article>
        {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
            <div className='bg-dark p-2 mb-3 text-center'>
                {showCreate ? 
                    <>
                        <button onClick={() => setShowCreate(false)} className='btn btn-info'>
                            Cancel
                        </button>
                        <CatCreate
                            setShowCreate={setShowCreate}
                            getCategories={getCategories} />
                    </> :
                    <button onClick={() => setShowCreate(true)} className='btn btn-danger'>
                        Create New Category
                    </button>
                }
            </div>
        }
        <Container>
            <table className='table bg-info table-dark mt-3 mb-3'>
                <thead className='table-secondary text-uppercase'>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN && 
                            <th>User Actions</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {/* map the categories to the singleCategory component */}
                    {categories.map(x => 
                        <SingleCategory 
                            key={x.CategoryId}
                            category={x} 
                            getCategories={getCategories}/>
                        )}
                </tbody>
            </table>
        </Container>
    </section>
  )
}