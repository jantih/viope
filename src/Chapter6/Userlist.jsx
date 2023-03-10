// Ch6.1
/* Modify the userlist app that we created in the 'Handling list'- section. You can get user avatar image url from the response. Add a new column to the table that shows user's avatar image. See the image below. */
import React, { useEffect, useState } from 'react';

export default function Userlist() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(resData => setUsers(resData.data))
  }, []);

  return (
    <div className="App">
      <table>
        <tbody>
        {
          users.map((user, index) => 
           <tr key={index}>
             <td>{user.first_name}</td>
             <td>{user.last_name}</td>
             <td>{user.email}</td>
             <td><img src={user.avatar}/></td>
           </tr>
          )
        }
        </tbody>
      </table>
     </div>
  );
}