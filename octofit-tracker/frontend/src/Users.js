import React, { useEffect, useState } from 'react';
import './App.css';

const BASE_URL = "https://animated-umbrella-x54pv4vq66r29v4x-8000.app.github.dev";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/users/`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="Users">
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
