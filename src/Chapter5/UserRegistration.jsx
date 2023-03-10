// Ch5.3
/*
Create React component that renders user registration form with the following fields: first name, last name, email and phone. The field values are saved to a state and the value of state should be an user object that contains firstName, lastName, email and phone properties. When the submit button is pressed, the component validates that all fields are filled. If the validation fails, the component shows an alert with text 'All fields are required'. If all fields are filled, the component shows an alert with text 'Welcome {firstName} {lastName}'.
*/
import React, { useState } from 'react';
export default function UserRegistration() {
    const [stats, setStats] = useState({ fname: '', lname: '', email: '', phone: '' });
    const inputChanged = (event) => {
        setStats({ ...stats, [event.target.name]: event.target.value });
    }
    const handleForm = (event) => {
        event.preventDefault();
        (stats.fname && stats.lname && stats.email && stats.phone) !== '' ? alert(`Welcome ${stats.fname} ${stats.lname}`) : alert('All fields are required');
    }
    return (
        <div>
            <h3>User Registration</h3>
            <form onSubmit={handleForm}>
                <input placeholder='First name' name='fname' value={stats.fname} onChange={inputChanged} /><br/>
                <input placeholder='Last name' name='lname' value={stats.lname} onChange={inputChanged} /><br/>
                <input placeholder='Email' name='email' value={stats.email} onChange={inputChanged} /><br/>
                <input placeholder='Phone' name='phone' value={stats.phone} onChange={inputChanged} /><br/>
                <button onClick={handleForm}>Submit</button>
            </form>
        </div>
    )
}