import axios from 'axios';
import React, { useState } from 'react';

export const ApiDemo2 = () => {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    try {
      const res = await axios.get('https://node5.onrender.com/user/user');
      console.log(res.data);
      setMessage(res.data.message);
      setUsers(res.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>API DEMO 2</h1>
      <button onClick={getUserData}>Fetch Users</button>
      <p>{message}</p>

      {users.length > 0 && (
        <table
          class="table table-dark"
          border="1"
          style={{ margin: '20px auto', borderCollapse: 'collapse' }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody style={{backgroundColor:"white", color:"black"}}>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{users.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
