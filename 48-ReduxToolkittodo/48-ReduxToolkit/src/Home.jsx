import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { alldelete, deleteUser } from './UserReducer';

function Home() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({id: id}))

    }

    const handleAllDelete = () => {
        dispatch(alldelete());
    }
  
  return (
    <div className='container'>
        <h2>Crud App</h2>
        <Link to="/create" className='btn-btn-success my-3'>Create+</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
    {users && users.length > 0 ? (
        users.map((user, index) => (
            <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/edit/${user.id}`} className='btn btn-primary'>Edit</Link>
                    <button onClick={() => handleDelete(user.id)} className='btn btn-danger mx-2'>Delete</button>
                </td>
          
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="4">Məlumat yoxdur</td>
        </tr>
    )}
</tbody>


        </table>
        <div>
<button onClick={handleAllDelete} className='btn btn-danger my-3'>All delete</button>
</div>
    </div>
  )
}

export default Home

