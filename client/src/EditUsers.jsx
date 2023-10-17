import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUsers = () => {
    const {id} = useParams();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3002/getUser/${id}`)
        .then(response => {
            setName(response?.data?.name);
            setEmail(response?.data?.email);
            setAge(response?.data?.age);
        })
        .catch(err => console.log('error', err))
    }, []);

    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3002/updateUser/${id}`, { name, email, age })
            .then(res => {
                console.log('res', res);
                navigate('/');
            })
            .catch(err => console.log('err', err))
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-item-center'>
            <div className='bg-white rounded p-3'>
                <form onSubmit={Update}>
                    <h2>Update User</h2>
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

                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditUsers