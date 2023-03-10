// Ch5.1
import React, { useState } from 'react';
export default function AgeCheck() {
    const [stats, setStats] = useState({ fname: '', age: 0 });
    const inputChanged = (event) => {
        setStats({ ...stats, [event.target.name]: event.target.value });
    }
    const showAlert = () => {
        stats.age >= 18 ? alert(`Hello ${stats.fname}`) : alert('You are too young');
    }
    return (
        <div>
            <h3>Check age</h3>
            <input placeholder='Name' name='fname' value={stats.fname} onChange={inputChanged} />
            <input placeholder='Age' name='age' value={stats.age} onChange={inputChanged} />
            <button onClick={showAlert}>Check age</button>
        </div>
    )
}