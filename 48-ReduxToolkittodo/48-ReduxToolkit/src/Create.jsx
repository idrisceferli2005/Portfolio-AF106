import React, { useState } from 'react'
import { addUser, updateUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
        const users = useSelector(state => state.users || []);

    const dispatch = useDispatch();  
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        dispatch(addUser({ id: newId, name, email }));
            navigate('/')
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add new user</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name:</label>
                <input onChange={e => setName(e.target.value)} type="text" name='name' className='form-control' placeholder='Enter name' />
                </div>
                <div>
                 <label htmlFor="email">Email:</label>
                <input onChange={e => setEmail(e.target.value)} type="email" name='email' className='form-control' placeholder='Enter email' />
                </div> <br />
                <button className='btn btn-info'>Submit</button>
              
            </form>
             </div>
      
    </div>
  )
}

export default Create
