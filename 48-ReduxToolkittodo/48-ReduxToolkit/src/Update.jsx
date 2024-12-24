import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';

function Update() {
    const { id } = useParams();
    const users = useSelector(state => state.users);
    const existingUser = users.find(user => user.id === parseInt(id));

    const [uname, setName] = useState(existingUser ? existingUser.name : '');
    const [uemail, setEmail] = useState(existingUser ? existingUser.email : '');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id: parseInt(id), name: uname, email: uemail }));
        navigate('/');
    }

   
    if (!existingUser) {
        return <div>User not found</div>;
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update user</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            onChange={e => setName(e.target.value)}
                            value={uname}
                            type="text"
                            name='name'
                            className='form-control'
                            placeholder='Enter name'
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            value={uemail}
                            type="email"
                            name='email'
                            className='form-control'
                            placeholder='Enter email'
                        />
                    </div>
                    <br />
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Update;
