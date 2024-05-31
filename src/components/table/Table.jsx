import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./Table.css"
import { deleteUser } from '../../redux/actions/userAction';
const Table = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userReducer)
    const handleDelete = async (id) => {
        dispatch(deleteUser(id))
    };

    return (
        <div className='table-container'>
            <table>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>password</td>
                    <td>relationship</td>
                    <td>education</td>
                </tr>

                {users &&
                    users?.userData?.map((user) => (
                        <tr>
                            <td>{user.userId}</td>
                            <td>{user.name}</td>
                            <td>{user.password}</td>
                            <td>{user.relationship}</td>
                            <td>{user.education}</td>
                            <td>
                                <button onClick={() => handleDelete(user.userId)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

            </table></div>
    )
}

export default Table