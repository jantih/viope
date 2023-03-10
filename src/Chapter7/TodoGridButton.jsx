// Ch7.2
/*
Install some button component that you can find from Awesome React site (https://github.com/brillout/awesome-react-components) to your todogrid app. 
Use installed button component instead of HTML button in your app (Add button).
In the image below, the button is implemented by using the Reactive Button component (https://github.com/arifszn/reactive-button).*/

import React, { useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';


export default function TodoGridButton() {
  const [todo, setTodo] = useState({description: '', date: '', status: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: '', status: ''});
  }

  const defaultColDef = {
    suppressMovable: true,
    sortable: true,
  }

  const columnDefs = [
    {field: 'description'},
    {field: 'date'},
    {field: 'status'},
  ];

  return (
    <div>
      <h3>TodoGrid w Button</h3>
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <input placeholder="Status" name="status" value={todo.status} onChange={inputChanged}/>
      <div style={{marginTop: "10px" }}>
        <AwesomeButton type="primary" size="large" onPress={() => addTodo()}>Add</AwesomeButton>
      </div>
      <div className="ag-theme-material" style={{ height: 600, width: 600, margin: 'auto' }}>
        <AgGridReact
           rowData={todos}
           defaultColDef={defaultColDef}
           columnDefs={columnDefs}
           animateRows={true}
           >
        </AgGridReact>
      </div>
    </div>
  );
}