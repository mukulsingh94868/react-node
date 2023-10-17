import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const User = () => {
    const [users, setUsers] = useState([{
        name: 'demo',
        email: 'demo@gmail.com',
        age: 30
    }]);


    useEffect(() => {
        axios.get('http://localhost:3002')
        .then(response => {
            setUsers(response.data)
        })
        .catch(err => console.log('error', err))
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3002/deleteUser/${id}`)
        .then(response => {
            console.log('response', response);
            window.location.reload();
        })
        .catch(err => console.log('error', err))
    };
    return (
        <>
            <div className="d-flex vh-100 justify-content-center align-item-center">
                <div className=" bg-white rounded p-3">
                    <Link to="/create" className="btn btn-success">Add +</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                !!users && users?.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.age}</td>
                                            <td>
                                                <Link to={`/update/${user?._id}`} className="btn btn-success">Edit</Link>
                                                <button className="btn btn-danger" onClick={() => handleDelete(user?._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default User