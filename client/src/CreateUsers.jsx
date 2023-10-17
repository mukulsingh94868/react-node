import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUsers = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/createUser', { name, email, age })
            .then(res => {
                console.log('response', res);
                navigate('/');
            })
            .catch(err => console.log('err', err))
    };
    return (
        <div className='d-flex vh-100 justify-content-center align-item-center'>
            <div className='bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add User</h2>

                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter the Name' className='form-control' />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter the Email' className='form-control' />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Age</label>
                        <input type='text' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter the Age' className='form-control' />
                    </div>

                    <button className='btn btn-success'>Success</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUsers